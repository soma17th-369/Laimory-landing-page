/**
 * 바깥으로 나가는 링크를 한곳에 모아 둡니다.
 *
 * DOWNLOAD_URL 하나만 바꾸면 헤더 · 히어로 · 푸터의
 * '앱 다운로드' 버튼이 모두 함께 바뀝니다.
 */
export const DOWNLOAD_URL =
  'https://play.google.com/store/apps/details?id=com.soma369.laimory';

/** 외부 주소는 새 탭으로 엽니다. 같은 페이지 앵커(#...)는 그대로 둡니다. */
export const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * 외부 링크에 붙일 속성. 새 탭으로 열고, 여는 쪽 창을 넘겨주지 않습니다.
 * 앵커 링크에는 아무것도 붙지 않도록 undefined를 돌려줍니다.
 */
export const externalLinkAttrs = (href: string) =>
  isExternal(href) ? { target: '_blank', rel: 'noopener' } : {};

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
