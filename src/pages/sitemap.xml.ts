import type { APIRoute } from 'astro';
import { absolute } from '../lib/site';
import { TERMS_URL } from '../lib/links';

/**
 * sitemap.xml
 *
 * 페이지 수가 적고 어떤 주소를 넣고 뺄지 직접 제어할 일이 많아서
 * @astrojs/sitemap 의존성을 더하는 대신 직접 만듭니다.
 *
 * lastmod는 넣지 않습니다. 믿을 만한 수정 시각 출처가 없는 상태에서
 * 빌드 시각을 넣으면 내용이 그대로인데도 매번 갱신된 것처럼 보이고,
 * 구글은 부정확한 lastmod를 무시합니다. 정확한 값을 댈 수 있을 때 넣으세요.
 *
 * changefreq / priority도 구글이 사용하지 않으므로 생략합니다.
 */

/** 한국어(기본)와 영어가 짝을 이루는 페이지 */
const LOCALIZED_PAGES = [{ ko: '/', en: '/en/' }];

/**
 * 한국어 문서만 있는 페이지 — 약관 6종.
 *
 * TERMS_URL이 현행 버전을 가리키므로, 약관이 개정되면 여기도 자동으로 새 주소만
 * 나갑니다. 다만 구버전 HTML 파일은 public에 그대로 남아 있으니 noindex로 돌려야
 * 같은 문서의 여러 버전이 색인에서 경쟁하지 않습니다.
 */
const KO_ONLY_PAGES: string[] = Object.values(TERMS_URL);

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => absolute(site, path);

  const localized = LOCALIZED_PAGES.flatMap((page) => {
    // 같은 문서의 언어별 판을 서로 가리켜 줍니다. x-default는 기본 언어인 한국어.
    const alternates = [
      `      <xhtml:link rel="alternate" hreflang="ko" href="${url(page.ko)}"/>`,
      `      <xhtml:link rel="alternate" hreflang="en" href="${url(page.en)}"/>`,
      `      <xhtml:link rel="alternate" hreflang="x-default" href="${url(page.ko)}"/>`,
    ].join('\n');

    return [page.ko, page.en].map(
      (path) => `    <url>\n      <loc>${url(path)}</loc>\n${alternates}\n    </url>`
    );
  });

  const koOnly = KO_ONLY_PAGES.map((path) => `    <url>\n      <loc>${url(path)}</loc>\n    </url>`);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...localized,
    ...koOnly,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
