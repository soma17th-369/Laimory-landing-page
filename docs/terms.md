# 약관 문서 운영 가이드

약관 원문 HTML은 [Laimory-server](https://github.com/soma17th-369/Laimory-server)의
`src/main/resources/terms-content/terms`가 원본입니다. 랜딩 페이지는 그 파일을 그대로
정적 자산으로 두고 서빙만 담당합니다.

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
