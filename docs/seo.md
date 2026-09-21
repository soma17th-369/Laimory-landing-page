# SEO 운영 가이드

SEO 발표 키노트 체크리스트를 기준으로 적용한 내용과 운영 절차를 정리합니다.

## 체크리스트 적용 현황

| # | 항목 | 상태 | 구현 위치 |
|---|---|---|---|
| 1 | robots.txt로 검색로봇 접근 경로 제어 | 적용 | `public/robots.txt` |
| 2 | 검색로봇 User-Agent 확인 | 절차 문서화 | 이 문서 [검색로봇 User-Agent 확인](#검색로봇-user-agent-확인) |
| 3 | XML Sitemap 작성과 제출 | 작성 자동화, 제출은 수동 | `@astrojs/sitemap` (`astro.config.mjs`) |
| 4 | 사람이 이해하기 쉬운 URL | 이미 충족 | `/`, `/en/`, `/terms/privacy-policy/1.0` 등 |
| 5 | URL에 콘텐츠 관련 단어 사용 | 이미 충족 | 약관 slug가 문서 내용을 그대로 설명 (`src/lib/links.ts`) |
| 6 | canonical URL로 중복 주소 정리 | 적용 | `src/layouts/Layout.astro` + `vercel.json`의 `trailingSlash` |
| 7 | 구조화 데이터와 JSON-LD | 적용 | `src/layouts/Layout.astro` (Organization + WebSite) |
| 8 | H1~H6 제목 태그 문서 구조화 | 이미 충족 | h1 1개(Hero) → 섹션별 h2 → HowItWorks 하위 h3 |
| 9 | 영구 이동 시 301 Redirect | 적용 (308) | `vercel.json`의 `redirects` |
| 10 | Open Graph / Twitter 메타 | 적용 | `src/layouts/Layout.astro` + `public/og/og.png` |
| 11 | Sitelinks Search Box / OpenSearch | 해당 없음 | 아래 [항목 11 미적용 사유](#항목-11-미적용-사유) |

## robots.txt 정책

- 감출 페이지가 없어 모든 로봇에게 전체 크롤링을 허용하고, 사이트맵 위치만 알립니다.
- 프리뷰 배포는 Vercel이 `X-Robots-Tag: noindex`를 자동으로 붙이므로 환경별 분기가 필요 없습니다.

## 사이트맵

`@astrojs/sitemap`이 빌드 때 `dist/sitemap-index.xml`과 `sitemap-0.xml`을 만듭니다.

- `/`와 `/en/`은 hreflang 대체 링크(`xhtml:link`) 쌍으로 들어갑니다.
- 약관 문서 6건은 `customPages`로 추가합니다. 주소 목록의 원본은 `src/lib/links.ts`의 `TERMS_URL` 하나입니다 — 약관 버전이 올라가면 그 파일만 고치면 사이트맵도 따라옵니다.
- `changefreq`/`priority`는 Google이 무시하고, `lastmod`는 불변 약관에 거짓 값이 되기 쉬워 셋 다 넣지 않습니다.

### 검색엔진 제출 (배포 후 수동, 1회)

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)에서 도메인 속성(`laimory.app`)으로 등록. 소유 확인은 Route 53에 TXT 레코드 추가(DNS는 `docs/deployment.md` 참고). 등록 후 Sitemaps 메뉴에 `https://www.laimory.app/sitemap-index.xml` 제출.
2. **네이버 서치어드바이저** — [searchadvisor.naver.com](https://searchadvisor.naver.com)에서 `https://www.laimory.app` 등록. 소유 확인은 HTML 파일 방식이면 받은 파일을 `public/`에 넣고 배포. 이후 요청 > 사이트맵 제출에 같은 주소 제출.
3. **Bing Webmaster Tools**(선택) — GSC 가져오기 기능으로 간단히 연동됩니다.

제출 후 1주쯤 뒤 수집 상태가 "성공"인지, hreflang이 인식됐는지 확인하세요.

## 검색로봇 User-Agent 확인

주요 검색로봇의 User-Agent 문자열:

| 검색엔진 | User-Agent (일부) |
|---|---|
| Google | `Googlebot/2.1`, `Googlebot-Image/1.0` |
| 네이버 | `Yeti/1.1 (Naver Corp.; +http://naver.me/spd)` |
| Bing | `bingbot/2.0` |

User-Agent는 누구나 위장할 수 있으므로, 로봇을 사칭한 트래픽이 의심되면 **역방향 → 순방향 DNS 이중 확인**을 합니다.

```bash
# 1) 접속 IP를 역방향 조회 — 호스트명이 공식 도메인으로 끝나는지 확인
#    Google: googlebot.com / google.com, 네이버: naver.com, Bing: search.msn.com
host 66.249.66.1

# 2) 나온 호스트명을 다시 순방향 조회 — 처음 IP와 일치해야 진짜
host crawl-66-249-66-1.googlebot.com
```

Google은 [공식 크롤러 IP 대역 JSON](https://developers.google.com/static/search/apis/ipranges/googlebot.json)도 제공합니다. 크롤러 방문 여부는 Vercel 대시보드의 로그에서 User-Agent로 필터해 확인할 수 있습니다.

## canonical / hreflang 규칙

- 같은 페이지가 `/en`과 `/en/` 두 주소로 열리는 중복을 막기 위해 canonical은 **항상 뒷슬래시 붙은 주소**로 통일하고(`Layout.astro`), `vercel.json`의 `trailingSlash: true`가 `/en` 요청을 `/en/`으로 308 리다이렉트합니다.
- hreflang은 `ko`/`en` + `x-default`(한국어)를 `<head>`와 사이트맵 양쪽에 싣습니다.
- 약관 문서는 각 HTML이 자체 canonical(확장자 없는 주소)을 이미 갖고 있어 손대지 않습니다.

## 리다이렉트 정책 (영구 이동)

- `vercel.json`의 `redirects`가 중복 주소를 정식 주소로 보냅니다: `/index.html` → `/`, `/en/index.html` → `/en/`, `/terms/{slug}/1.0.html` → `/terms/{slug}/1.0`.
- `permanent: true`는 **308**을 반환합니다. 검색엔진은 308을 301과 동일한 영구 이동 신호로 취급합니다(리터럴 301이 필요하면 `permanent` 대신 `statusCode: 301`).
- Vercel은 redirects를 rewrites보다 먼저 처리하고 rewrite 목적지는 내부에서만 해석되므로, `.html` → 확장자 없는 주소 → (rewrite) → `.html` 파일 서빙 구조는 루프가 없습니다.
- **약관 새 버전을 게시할 때는 rewrite와 redirect를 한 줄씩 함께 추가**하세요(와일드카드 금지 정책은 `docs/terms.md` 참고).
- 주의: `/terms/(.*)` 헤더 규칙의 `Cache-Control: immutable`이 이 308 응답에도 적용됩니다. 영구 리다이렉트라 문제없지만, `/terms/` 아래에는 임시 리다이렉트를 두면 안 됩니다.

## 구조화 데이터 (JSON-LD)

`Layout.astro`가 Organization + WebSite를 `@graph`로 넣습니다.

- 검색 기능이 없어 `potentialAction`(SearchAction)은 넣지 않습니다.
- 앱 스토어 출시 후 `DOWNLOAD_URL`(`src/lib/links.ts`)이 실제 주소가 되면 `SoftwareApplication`(또는 `MobileApplication`) 노드를 추가하세요.
- 검증: [validator.schema.org](https://validator.schema.org), [Google 리치 결과 테스트](https://search.google.com/test/rich-results).

## Open Graph / Twitter 이미지

- 공유 이미지는 `public/og/og.png`(1200×630, ko/en 공용), JSON-LD용 로고는 `public/brand/logo-512.png`.
- 로고 원본이 바뀌면 `scripts/og/logo-1024.png`를 교체하고 `scripts/og/generate.sh`를 실행해 다시 만드세요(헤드리스 크롬 사용, macOS 전용).
- 공유 미리보기 확인·캐시 갱신: [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing), [Facebook 공유 디버거](https://developers.facebook.com/tools/debug/).

## 항목 11 미적용 사유

**Sitelinks Search Box / OpenSearch는 적용하지 않습니다.**

- 랜딩페이지에 사이트 내 검색 기능이 없어 연결할 검색 엔드포인트 자체가 없습니다.
- Google은 2024년 10월 지원 종료를 발표하고 2024-11-21부터 Sitelinks Search Box 노출과 `SearchAction` 마크업 사용을 중단했습니다.
- OpenSearch description은 브라우저 주소창 검색 통합용이라 역시 검색 엔드포인트가 전제입니다.
- 향후 사이트 검색을 도입하면 재검토하세요.

## 추후 과제

- `favicon.ico` / `apple-touch-icon` 추가 (구형 브라우저·iOS 홈 화면)
- `404.astro` 커스텀 404 페이지
- 스토어 출시 후 `SoftwareApplication` JSON-LD
