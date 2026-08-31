import type { APIRoute } from 'astro';
import { SITE_ORIGIN } from '../lib/site';

/**
 * robots.txt
 *
 * 정적 파일(public/robots.txt)로 두지 않고 엔드포인트로 만든 이유는
 * Sitemap 줄에 절대 주소가 필요하기 때문입니다. astro.config.mjs의 site를
 * 그대로 쓰므로 도메인이 바뀌어도 여기를 고칠 일이 없습니다.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = SITE_ORIGIN(site);

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', origin).href}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
