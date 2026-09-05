# 약관 문서 운영 가이드

약관 원문의 source of truth는
[Laimory-server](https://github.com/soma17th-369/Laimory-server)의
`docs/terms/drafts/*.md` Markdown이고, 게시용 HTML은
`docs/terms/scripts/build-site.mjs`가 거기서 생성합니다. 스타일(`<style>` 블록)도 이
스크립트 안에 있습니다. 랜딩 페이지는 생성된 HTML을 정적 자산으로 두고 서빙만 담당합니다.

**HTML을 고칠 때는 build-site.mjs도 함께 고쳐야 합니다.** 그러지 않으면 다음에 약관을
다시 생성할 때 되돌아갑니다.

`src/main/resources/terms-content`는 더 이상 원본이 아닙니다. 2026-09-01
Laimory-server PR #427 `약관 원문 서빙을 랜딩페이지로 이관`에서 HTML 6종과
`TermContentController`가 함께 삭제되었고, Server는 catalog의 주소만 다룹니다.

## 현재 게시된 문서

| 약관 | 저장 위치 | 게시 주소 |
| --- | --- | --- |
| 이용약관 | `public/terms/terms-of-service/1.0.html` | `https://www.laimory.app/terms/terms-of-service/1.0` |
| 개인정보 처리방침 | `public/terms/privacy-policy/1.0.html` | `https://www.laimory.app/terms/privacy-policy/1.0` |
| 민감정보 처리 동의 | `public/terms/sensitive-information-consent/1.0.html` | `https://www.laimory.app/terms/sensitive-information-consent/1.0` |
| 제3자 제공 동의 | `public/terms/third-party-provision-consent/1.0.html` | `https://www.laimory.app/terms/third-party-provision-consent/1.0` |
| 국외 이전 동의 | `public/terms/cross-border-transfer-consent/1.0.html` | `https://www.laimory.app/terms/cross-border-transfer-consent/1.0` |
| 위치기반서비스 이용약관 | `public/terms/location-based-service-terms/1.0.html` | `https://www.laimory.app/terms/location-based-service-terms/1.0` |

## 원본에서 달라지는 부분

원본 HTML에서 **canonical origin 한 줄만** 바꿉니다. 법률 본문, 스타일, 시행일은
수정하지 않습니다.

```
- <link rel="canonical" href="https://laimory.app/terms/{slug}/{version}">
+ <link rel="canonical" href="https://www.laimory.app/terms/{slug}/{version}">
```

랜딩 페이지 운영 도메인이 `www.laimory.app`이므로 (`astro.config.mjs`의 `site`와 동일),
canonical도 같은 origin을 가리켜야 합니다.

원본과의 바이트 비교가 가능하도록 `.gitattributes`에서 `public/terms/**/*.html`을
LF로 고정했습니다. Windows에서 체크아웃해도 줄바꿈이 CRLF로 바뀌지 않습니다.

## 확장자 없는 주소로 서빙되는 방식

`public/` 아래 파일은 빌드 시 `dist/`로 그대로 복사되어 `.html`이 붙은 주소로 서빙됩니다.
`vercel.json`의 `rewrites`가 확장자 없는 주소를 그 파일로 이어 줍니다.

```json
{
  "source": "/terms/terms-of-service/1.0",
  "destination": "/terms/terms-of-service/1.0.html"
}
```

와일드카드 대신 버전마다 한 줄씩 명시합니다. 새 버전을 게시하겠다는 결정이 설정에
그대로 남고, 파일만 올라가고 주소가 열리는 사고를 막을 수 있습니다.

`vercel.json`의 `headers`에서 `/terms/(.*)` 경로에 다음을 지정합니다.

| 헤더 | 값 |
| --- | --- |
| `Content-Type` | `text/html; charset=utf-8` |
| `Cache-Control` | `public, max-age=31536000, immutable` |

`immutable`은 **이미 배포된 버전 파일을 절대 덮어쓰지 않는다**는 전제 위에서만
성립합니다. 이 전제가 깨지면 사용자 브라우저와 앱 WebView가 1년 동안 옛 문서를
계속 보여 줍니다.

## 예외 — 잘못된 개인정보를 지울 때

버전을 올리지 않고 배포된 파일을 직접 고치는 경우입니다. 아래 "표시가 깨진 것을
고칠 때"와 함께 두 가지뿐입니다.

약관 본문에 잘못된 개인정보(엉뚱한 전화번호·이메일 등)가 들어간 것은 법률적
개정이 아니라 오기입니다. 이때 새 버전을 올리고 옛 버전을 남겨 두면 잘못된
개인정보가 계속 공개된 채로 남으므로, 아래 개정 절차를 따르지 않고 해당
버전 파일을 직접 수정합니다.

- 법률 문구는 건드리지 않고 잘못된 값만 바꿉니다. 되돌려서 원본과 대조해
  다른 변경이 섞이지 않았는지 확인하세요.
- 원본인 Laimory-server의 `docs/terms/drafts/*.md`도 함께 고쳐야 합니다. 그러지
  않으면 다음에 약관을 다시 생성할 때 되돌아옵니다.
- `immutable` 때문에 **이미 페이지를 받아간 브라우저는 최대 1년간 옛 내용을
  그대로 보여줍니다.** 재배포하면 Vercel 엣지 캐시는 갱신되지만 개별 브라우저
  캐시는 손댈 수 없습니다. 노출 기간이 길었다면 새 버전 주소로 옮기는 편이
  확실합니다.

## 예외 — 표시가 깨진 것을 고칠 때

법률 문구는 한 글자도 바꾸지 않고 `<style>` 안의 CSS만 고치는 경우입니다.
버전을 올리지 않고 배포된 파일을 직접 수정합니다.

버전을 올리면 안 되는 이유가 있습니다. `1.1`은 법률 개정 신호이고, `1.0`에 동의한
사용자는 자신이 동의한 문서를 계속 열 수 있어야 합니다. 표시 방식만 바뀐 것을
개정으로 기록하면 동의 이력과 문서가 어긋납니다.

- **법률 문구·구조는 건드리지 않습니다.** `git diff`로 `<style>` 밖의 변경이 섞이지
  않았는지 확인하세요.
- 스타일은 Laimory-server의 `docs/terms/scripts/build-site.mjs` 안에 있습니다. 거기도
  함께 고쳐야 다음에 약관을 다시 생성할 때 되돌아오지 않습니다.
- `immutable` 때문에 이미 페이지를 받아간 브라우저는 최대 1년간 옛 CSS로 봅니다.
  다만 표시가 어색할 뿐 약관 내용을 잘못 알리지는 않으므로, 잘못된 개인정보와 달리
  새 버전으로 옮길 이유가 되지 않습니다.

### 기록

- 2026-09-06: 굵게 표시한 부분(`<strong>`)을 주변 글과 같게 맞췄습니다. 그전에는
  주변의 1.2배 크기에 하늘색(`#93c5fd`) 밑줄이 붙어 문서 안에서 혼자 튀어 보였습니다.
  크기·색·밑줄을 없애고 굵기(`font-weight: 700`)만 남겼습니다.
- 2026-09-06: 본문 글씨를 표와 같은 15px(`body { font-size: .9375rem }`)로 맞췄습니다.
  그전에는 본문 16px, 표 15px이라 한 문서 안에서 크기가 어긋나 보였습니다. 제목은
  `rem` 기준이라 크기가 그대로입니다.
- 2026-09-06: 위에서 넣었던 표 확장(`@media (min-width: 1320px)`으로 `.table-scroll`을
  본문 좌우로 넓히던 규칙)을 되돌렸습니다. 넓은 화면에서 표가 본문 밖으로 튀어나오는
  모양이 어색해, 열이 많은 표는 이전처럼 래퍼 안에서 가로 스크롤하도록 두었습니다.
- 2026-09-06: 표의 `th, td`에 `overflow-wrap: break-word` 추가. `body`의
  `overflow-wrap: anywhere`가 표 칸의 최소 폭을 글자 하나로 계산하게 만들어,
  열이 많은 표에서 `Amazon Web Services, Inc.`가 `Am / azo / n / We / b …`처럼
  단어 중간에서 잘렸습니다. 6개 문서 모두 같은 CSS 템플릿이라 함께 고쳤습니다.

## 약관을 개정할 때

배포된 버전 파일은 수정하지 않습니다. 새 버전 주소를 추가합니다.

1. Laimory-server에서 새 버전 HTML을 받습니다. 예: `terms-of-service/1.1`
2. `public/terms/terms-of-service/1.1.html`로 저장합니다.
3. canonical을 `https://www.laimory.app/terms/terms-of-service/1.1`로 바꿉니다.
4. `vercel.json`의 `rewrites`에 `1.1` 항목을 추가합니다. **`1.0` 항목은 남겨 둡니다.**
   기존 버전에 동의한 사용자가 자신이 동의한 문서를 계속 열 수 있어야 합니다.
5. 푸터가 가리키는 버전을 올리려면 `src/lib/links.ts`의 `TERMS_URL`을 수정합니다.
6. 앱·서버가 참조하는 버전도 함께 올려야 하는지 Laimory-server 쪽과 확인합니다.

## 배포 후 확인

`https://www.laimory.app` 기준으로 6개 주소를 모두 확인합니다.

- [ ] 로그인 없이(시크릿 창) 6개 주소가 모두 `200`
- [ ] 주소창이 `.html`이나 trailing slash로 바뀌지 않음
- [ ] 응답 헤더의 `Content-Type`이 `text/html; charset=utf-8`
- [ ] 응답 헤더의 `Cache-Control`이 `public, max-age=31536000, immutable`
- [ ] 모바일 화면에서 핀치 줌으로 확대됨
- [ ] 넓은 표가 가로로 스크롤되고, 페이지 자체는 가로로 넘치지 않음
- [ ] 표 안에서 `Amazon Web Services, Inc.` 같은 단어가 중간에서 잘리지 않음
- [ ] 본문 글씨와 표 글씨 크기가 같음 (둘 다 15px)
- [ ] 굵게 표시한 부분이 주변 글과 크기·색이 같고 밑줄이 없음
- [ ] 개발자 도구 Network에 외부 스크립트·분석 도구 요청이 없음
- [ ] 랜딩 페이지 푸터의 이용약관 · 개인정보 처리방침 링크가 열림 (한국어 `/`, 영어 `/en/`)

명령줄로 확인하려면 다음을 사용합니다.

```bash
for slug in terms-of-service privacy-policy sensitive-information-consent third-party-provision-consent cross-border-transfer-consent location-based-service-terms; do curl -sS -o /dev/null -w "%{http_code} %{redirect_url} %{url_effective}\n" "https://www.laimory.app/terms/$slug/1.0"; done
```

모든 줄이 `200`이고 `redirect_url`이 비어 있어야 합니다.

원문 HTML 자체에 `Content-Security-Policy: default-src 'none'`과
`<meta name="viewport" content="width=device-width, initial-scale=1">`이 들어 있어,
외부 리소스 차단과 확대 허용은 문서 쪽에서도 보장됩니다.
