/**
 * 바깥으로 나가는 링크를 한곳에 모아 둡니다.
 */

/** 스토어 주소. 구조화 데이터(Layout.astro의 JSON-LD)에는 이 주소를 그대로 씁니다. */
export const DOWNLOAD_URL =
  'https://play.google.com/store/apps/details?id=com.soma369.laimory';

/** 다운로드 버튼이 놓인 자리. 스토어 링크의 utm_content 값이 됩니다. */
export type DownloadPlacement = 'header' | 'hero' | 'footer';

/**
 * 다운로드 버튼이 여는 스토어 주소.
 *
 * 광고는 스토어로 바로 보내고(utm_source=meta, utm_medium=paid),
 * 웹사이트에서 나간 설치는 아래 고정값으로 나눠 봅니다.
 * utm_* 값은 referrer 파라미터 안에 인코딩해 담아야
 * Play Console과 Install Referrer API에 잡힙니다.
 */
export function storeUrl(placement: DownloadPlacement): string {
  const referrer = new URLSearchParams({
    utm_source: 'website',
    utm_medium: 'organic',
    utm_campaign: 'landing',
    utm_content: placement,
  });
  const url = new URL(DOWNLOAD_URL);
  url.searchParams.set('hl', 'ko');
  url.searchParams.set('referrer', referrer.toString());
  return url.toString();
}

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
