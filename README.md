# Laimory Landing Page

Laimory를 소개하는 랜딩 페이지입니다. 웹/모바일 반응형과 한/영 다국어(i18n)를 기본으로 지원합니다.

## 기술 스택

- **[Astro](https://astro.build/)** — 랜딩 페이지에 최적화된 프레임워크 (기본적으로 JS 최소 탑재 → 빠른 로딩, 강한 SEO)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — 유틸리티 기반 반응형 스타일링
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
│  ├─ index.astro          # 한국어 홈 (/)
│  └─ en/index.astro       # 영어 홈 (/en/)
├─ layouts/
│  └─ Layout.astro         # 공통 HTML 뼈대 (head, meta, Header/Footer)
├─ components/
│  ├─ Header.astro         # 상단 내비게이션
│  ├─ Footer.astro         # 하단 푸터
│  ├─ LanguagePicker.astro # 언어 전환 (KO / EN)
│  └─ sections/
│     ├─ Hero.astro        # 히어로 (첫 화면)
│     ├─ Features.astro    # 기능 소개
│     └─ CTA.astro         # 행동 유도 배너
├─ i18n/
│  ├─ ui.ts                # 모든 문구(한/영) — 콘텐츠는 여기서 수정
│  └─ utils.ts             # 언어 감지 · 번역 헬퍼
└─ styles/
   └─ global.css           # Tailwind 진입점 + 브랜드 색상 토큰
```

## 자주 하는 수정

- **문구 변경**: `src/i18n/ui.ts` 의 `ko` / `en` 값 수정
- **브랜드 색상 변경**: `src/styles/global.css` 의 `@theme` 안 `--color-brand`
- **섹션 추가/편집**: `src/components/sections/` 에 컴포넌트 추가 후 `pages/index.astro`, `pages/en/index.astro` 에 삽입
- **다크 모드**: 사용자 OS 설정(`prefers-color-scheme`)을 자동으로 따릅니다

## 배포

Vercel 배포는 GitHub Actions가 담당합니다.

- Pull Request: 빌드 검증 후 Preview 배포
- `main` 브랜치 push: 빌드 검증 후 Production 배포
- 운영 도메인: `https://laimory.com`

최초 Vercel 프로젝트 연결, GitHub Secrets, Route 53 레코드 설정은
[배포 운영 가이드](docs/deployment.md)를 따라 진행하세요.
