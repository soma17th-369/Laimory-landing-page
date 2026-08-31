// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 운영 도메인 (www 고정 — 약관 HTML의 canonical과 같은 origin이어야 합니다)
  site: 'https://www.laimory.app',

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

  vite: {
    plugins: [tailwindcss()],
  },
});
