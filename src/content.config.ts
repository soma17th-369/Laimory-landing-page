import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 앱 WebView로 여는 공지사항.
 *
 * src/content/notices/{slug}.md 파일 하나가 /notices/{slug}/ 페이지 하나가 됩니다.
 * 파일 이름이 곧 앱에서 여는 주소이므로, 게시한 뒤에는 이름을 바꾸지 않습니다.
 */
const notices = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/notices' }),
  schema: z.object({
    title: z.string(),
    /** 게시일. 본문 제목 아래에 표시합니다. */
    date: z.coerce.date(),
  }),
});

export const collections = { notices };
