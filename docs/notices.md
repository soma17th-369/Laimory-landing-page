# 공지사항 운영 가이드

앱이 WebView로 여는 공지사항을 이 저장소에서 게시합니다.

## 주소

```
https://www.laimory.app/notices/{slug}/
```

`vercel.json`의 `trailingSlash: true` 때문에 `/notices/{slug}`로 요청하면
`/notices/{slug}/`로 308 리다이렉트됩니다. WebView는 리다이렉트를 따라가므로 어느 쪽으로
열어도 되지만, 앱에는 뒷슬래시가 붙은 주소를 넣으면 리다이렉트 한 번을 아낄 수 있습니다.

## 공지 추가

`src/content/notices/{slug}.md` 파일을 하나 추가합니다. 파일 이름이 그대로 주소가 됩니다.

```md
---
title: 공지 제목
date: 2026-09-28
---

본문은 Markdown으로 씁니다.
```

- 파일 이름(`slug`)은 영문 소문자·숫자를 하이픈으로 이어 씁니다. 예: `2026-10-service-update`
  - 대문자·공백·밑줄·점이 들어가면 빌드가 실패합니다(`src/content.config.ts`).
  - 점을 막는 이유: Vercel이 `v1.2`의 `.2`를 확장자로 보고 뒷슬래시 리다이렉트를
    건너뛰어, 뒷슬래시 없는 주소가 404가 됩니다.
  - frontmatter에 `slug:`를 적어도 주소는 바뀌지 않습니다.
- `date`는 시각 없이 날짜만 적습니다. 시각을 적으면 빌드가 실패합니다.
  (시각이 UTC로 바뀌며 화면의 날짜가 하루 밀릴 수 있기 때문입니다.)
- 게시한 뒤에는 파일 이름을 바꾸지 않습니다. 앱이 들고 있는 주소가 404가 됩니다.

### 본문에 링크를 넣지 않습니다

앱 WebView는 기본적으로 `mailto:` 링크를 열지 못하고(Android에서 `ERR_UNKNOWN_URL_SCHEME`),
외부 링크는 WebView 안에서 열려 돌아갈 방법이 없습니다. 앱에서 링크 처리를 붙이기 전까지는
본문에 링크를 넣지 않습니다. 이메일 주소를 그냥 적어도 Markdown이 자동으로 `mailto:` 링크로
만들므로 주의합니다.

### 이미지

이미지는 `public/notice-assets/` 아래에 두고 `/notice-assets/...` 절대 경로로 넣습니다.
`public/notices/`에 두면 공지 주소(`/notices/{slug}/`)와 같은 경로를 써서 충돌할 수 있습니다.
문서의 CSP가 같은 origin 이미지만 허용합니다.

## 페이지 구성

- `src/pages/notices/[slug].astro`가 공지 한 건을 렌더링합니다.
- 뼈대는 `src/layouts/PlainLayout.astro`입니다. 랜딩 `Layout`(헤더·푸터·웹폰트)을 쓰지 않고,
  약관 HTML처럼 스크립트·외부 리소스 없이 CSS만 싣습니다.
- 색·글꼴은 랜딩과 같은 디자인 토큰(`src/styles/tokens.css`)을 씁니다. 브랜드 색을 바꾸면
  공지도 함께 바뀝니다.
- 검색 노출 대상이 아니므로 `noindex`를 붙이고, 사이트맵에서도 뺍니다(`astro.config.mjs`).
- 내려간 공지나 없는 주소는 `src/pages/404.astro`가 같은 뼈대로 안내합니다.
- 개발 서버(`npm run dev`)에서는 Vite 스크립트가 CSP에 막혔다는 콘솔 에러가 뜹니다.
  빌드 결과물에는 스크립트가 없어 운영에서는 나타나지 않습니다.

## 테스트 공지

`src/content/notices/test-notice.md` → `/notices/test-notice/`는 WebView 연동 확인용입니다.
확인이 끝나면 지워도 됩니다.
