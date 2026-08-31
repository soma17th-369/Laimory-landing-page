# Laimory Landing Page

Laimory를 소개하는 랜딩 페이지입니다. 반응형과 한/영 다국어(i18n)를 기본으로 지원합니다.

화면은 Laimory 디자인 파일을 그대로 옮긴 것으로, 색·간격·아이콘·폰트가 시안과 1:1로 맞춰져
있습니다.

## 기술 스택

- **[Astro](https://astro.build/)** — 랜딩 페이지에 최적화된 프레임워크 (기본적으로 JS 최소 탑재 → 빠른 로딩, 강한 SEO)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — 기본 리셋과 유틸리티 용도. 실제 디자인은 `global.css`의 디자인 토큰과 컴포넌트 CSS로 구현되어 있습니다.
- **TypeScript** — 타입 안전성

## 시작하기

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:4321)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 폴더 구조

```
src/
├─ pages/
│  ├─ index.astro            # 한국어 홈 (/)
│  └─ en/index.astro         # 영어 홈 (/en/)
├─ layouts/
│  └─ Layout.astro           # 공통 HTML 뼈대 (head, meta, 폰트, Header/Footer)
├─ components/
│  ├─ Header.astro           # 상단 바 (히어로와 이어지는 네이비)
│  ├─ Footer.astro           # 하단 푸터 겸 다운로드 영역
│  ├─ LanguagePicker.astro   # 언어 전환 (KO / EN)
│  ├─ Logo.astro             # Laimory 워드마크 (currentColor)
│  ├─ Icon.astro             # 아이콘 한 개 렌더링
│  ├─ MoodFace.astro         # 감정 얼굴 다섯 종
│  ├─ PhoneFrame.astro       # 폰 목업 틀
│  ├─ AppScreen.astro        # 목업 안에 들어가는 앱 화면
│  └─ sections/
│     ├─ Hero.astro          # 히어로 (첫 화면)
│     ├─ Moments.astro       # "지난 주엔 뭘 하셨나요?"
│     ├─ HowItWorks.astro    # 세 단계 설명
│     ├─ Sources.astro       # 데이터 소스 4종
│     ├─ Control.astro       # 기록 권한
│     └─ MoodStrip.astro     # 감정 얼굴 띠
├─ i18n/
│  ├─ ui.ts                  # 모든 문구(한/영) — 콘텐츠는 여기서 수정
│  └─ utils.ts               # 언어 감지 · 문구 헬퍼
├─ lib/
│  ├─ icons.ts               # 디자인 파일에서 추출한 아이콘 패스
│  ├─ moods.ts               # 감정별 색·표정 정의
│  ├─ links.ts               # 앱 다운로드 링크 · 약관 URL
│  └─ business.ts            # 사업자 정보 (번호·이메일 등 언어 무관한 값)
└─ styles/
   └─ global.css             # 디자인 토큰 + 공통 클래스

public/
└─ terms/                     # 약관 원문 HTML (Laimory-server에서 가져온 정적 파일)
   └─ {slug}/{version}.html   # 예: terms-of-service/1.0.html → /terms/terms-of-service/1.0
```

## 자주 하는 수정

- **문구 변경**: `src/i18n/ui.ts` 의 `ko` / `en` 값 수정. 두 언어가 같은 타입을 쓰므로 한쪽만 고치면 타입 검사에서 걸립니다.
- **색상 변경**: `src/styles/global.css` 의 `:root` 안 `--lm-*` 토큰
- **앱 다운로드 링크**: `src/lib/links.ts` 의 `DOWNLOAD_URL` — 지금은 푸터로 스크롤만 하는 자리표시자입니다.
- **약관 개정**: `docs/terms.md` 참고. 배포된 버전 파일은 덮어쓰지 않고 새 버전을 추가합니다.
- **푸터 사업자 정보**: 번호·이메일은 `src/lib/business.ts`, 이름·주소·라벨은 `src/i18n/ui.ts`의 `footer.business`. 원본은 약관 본문이므로 바꿀 때 약관과 함께 맞춥니다.
- **섹션 추가/편집**: `src/components/sections/` 에 컴포넌트 추가 후 `pages/index.astro`, `pages/en/index.astro` 에 삽입
- **아이콘 추가**: 디자인 파일에서 패스를 추출해 `src/lib/icons.ts` 에 추가

## 배포

Vercel 배포는 GitHub Actions가 담당합니다.

- Pull Request: 빌드 검증 후 Preview 배포
- `main` 브랜치 push: 빌드 검증 후 Production 배포

최초 Vercel 프로젝트 연결, GitHub Secrets, Route 53 레코드 설정은
[배포 운영 가이드](docs/deployment.md)를 따라 진행하세요.

약관 HTML 게시와 개정 절차는 [약관 문서 운영 가이드](docs/terms.md)를 따릅니다.
