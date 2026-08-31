/**
 * 바깥으로 나가는 링크를 한곳에 모아 둡니다.
 *
 * 앱 스토어 주소가 나오면 DOWNLOAD_URL만 실제 주소로 바꾸면
 * 헤더 · 히어로 · 푸터의 '앱 다운로드' 버튼이 모두 함께 바뀝니다.
 * 지금은 주소가 없어 푸터의 다운로드 영역으로 스크롤만 시킵니다.
 */
export const DOWNLOAD_URL = '#download';

/** 외부 주소로 바뀌면 새 탭으로 열도록 속성을 함께 넘깁니다. */
export const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * 약관 문서 주소.
 *
 * 실제 HTML은 Laimory-server의 terms-content에서 가져와
 * public/terms/{slug}/{version}.html 로 두고, vercel.json의 rewrite가
 * 확장자 없는 아래 주소로 이어 줍니다.
 *
 * 배포된 버전은 덮어쓰지 않습니다. 약관이 개정되면 새 파일(예: 1.1.html)을
 * 추가하고 여기 버전만 올리세요.
 */
export const TERMS_URL = {
  termsOfService: '/terms/terms-of-service/1.0',
  privacyPolicy: '/terms/privacy-policy/1.0',
  sensitiveInformationConsent: '/terms/sensitive-information-consent/1.0',
  thirdPartyProvisionConsent: '/terms/third-party-provision-consent/1.0',
  crossBorderTransferConsent: '/terms/cross-border-transfer-consent/1.0',
  locationBasedServiceTerms: '/terms/location-based-service-terms/1.0',
} as const;
