import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 공지 주소에 쓸 수 있는 slug: 영문 소문자·숫자를 하이픈으로 이은 형태.
 * 점(.)은 막습니다. Vercel이 확장자로 보고 뒷슬래시 리다이렉트를 건너뛰어
 * /notices/v1.2 같은 주소가 404가 됩니다.
 */
const NOTICE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * 앱 WebView로 여는 공지사항.
 *
 * src/content/notices/{slug}.md 파일 하나가 /notices/{slug}/ 페이지 하나가 됩니다.
 * 파일 이름이 곧 앱에서 여는 주소이므로, 게시한 뒤에는 이름을 바꾸지 않습니다.
 */
const notices = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/notices',
    // 기본 동작은 파일 이름을 slug로 가공하고 frontmatter의 slug로 덮어써
    // 주소가 파일 이름과 달라질 수 있습니다. 파일 이름을 그대로 쓰고 형식을 검사합니다.
    generateId: ({ entry }) => {
      const slug = entry.replace(/\.md$/, '');
      if (!NOTICE_SLUG.test(slug)) {
        throw new Error(
          `공지 파일 이름 "${entry}"은 영문 소문자·숫자·하이픈만 쓸 수 있습니다. 예: 2026-10-service-update.md`,
        );
      }
      return slug;
    },
  }),
  schema: z.object({
    title: z.string(),
    /**
     * 게시일. 본문 제목 아래에 표시합니다.
     * 시각을 적으면 UTC로 바뀌며 하루가 밀릴 수 있어 날짜(YYYY-MM-DD)만 받습니다.
     */
    date: z.coerce.date().refine(
      (d) => d.getUTCHours() === 0 && d.getUTCMinutes() === 0 && d.getUTCSeconds() === 0,
      { message: 'date는 시각 없이 날짜만 적어 주세요. 예: 2026-09-28' },
    ),
  }),
});

export const collections = { notices };
