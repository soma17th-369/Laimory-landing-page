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

  integrations: [
    sitemap({
      // Astro 페이지가 아닌 약관 문서(확장자 없는 정식 주소)도 포함합니다.
      // 주소 목록의 원본은 src/lib/links.ts 하나만 유지합니다.
      customPages: Object.values(TERMS_URL).map((path) => `${SITE}${path}`),
      // 공지사항은 앱 WebView용이라 검색 노출 대상이 아닙니다(페이지에도 noindex).
      filter: (page) => !page.startsWith(`${SITE}/notices/`),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
