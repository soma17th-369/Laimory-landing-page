// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 배포 도메인이 정해지면 실제 주소로 변경하세요.
  site: 'https://laimory.com',

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
