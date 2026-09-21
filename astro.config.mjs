// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { TERMS_URL } from './src/lib/links.ts';

// 운영 도메인 (www 고정 — 약관 HTML의 canonical과 같은 origin이어야 합니다)
const SITE = 'https://www.laimory.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // 한국어(기본) / 영어 다국어 라우팅
  // - 한국어: /            (기본 언어라 접두어 없음)
  // - 영어:  /en/
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // 사이트맵에도 언어별 대체 링크(xhtml:link hreflang)를 실어 줍니다.
      // 값은 Layout.astro <head>의 hreflang(ko/en)과 같은 단위로 맞춥니다.
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko', en: 'en' },
      },
      // Astro 페이지가 아닌 약관 문서(확장자 없는 정식 주소)도 포함합니다.
      // 주소 목록의 원본은 src/lib/links.ts 하나만 유지합니다.
      customPages: Object.values(TERMS_URL).map((path) => `${SITE}${path}`),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
