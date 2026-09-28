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

`src/content/notices/{slug}.md` 파일을 하나 추가합니다. 파일 이름이 곧 주소입니다.

```md
---
title: 공지 제목
date: 2026-09-28
---

본문은 Markdown으로 씁니다.
```

- `slug`는 영문 소문자·숫자·하이픈으로 씁니다. 예: `2026-10-service-update`
- 게시한 뒤에는 파일 이름을 바꾸지 않습니다. 앱이 들고 있는 주소가 404가 됩니다.
- 이미지는 `public/notices/` 아래에 두고 `/notices/...` 절대 경로로 넣습니다.
  문서의 CSP가 같은 origin 이미지만 허용합니다.

## 페이지 구성

`src/pages/notices/[slug].astro`가 공지 한 건을 렌더링합니다.

- 랜딩 페이지 `Layout`(헤더·푸터·웹폰트)을 쓰지 않는 독립 문서입니다. 앱 안에서 바로
  읽히도록 약관 HTML처럼 스크립트·외부 리소스 없이 CSS만 인라인으로 넣습니다.
- 검색 노출 대상이 아니므로 `noindex`를 붙이고, 사이트맵에서도 뺍니다(`astro.config.mjs`).
- 개발 서버(`npm run dev`)에서는 Vite 스크립트가 CSP에 막혔다는 콘솔 에러가 뜹니다.
  빌드 결과물에는 스크립트가 없어 운영에서는 나타나지 않습니다.

## 테스트 공지

`src/content/notices/test-notice.md` → `/notices/test-notice/`는 WebView 연동 확인용입니다.
확인이 끝나면 지워도 됩니다.
