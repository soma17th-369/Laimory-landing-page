/**
 * 바깥으로 나가는 링크를 한곳에 모아 둡니다.
 */

import type { Lang } from './i18n';

/** 스토어 주소. 구조화 데이터(Layout.astro의 JSON-LD)에는 이 주소를 그대로 씁니다. */
export const DOWNLOAD_URL =
  'https://play.google.com/store/apps/details?id=com.soma369.laimory';

/** 다운로드 버튼이 놓인 자리. 스토어 링크의 utm_content 값이 됩니다. */
export type DownloadPlacement = 'header' | 'hero' | 'footer';

/**
 * 다운로드 버튼이 여는 스토어 주소.
 *
 * 웹사이트에서 나간 설치는 아래 고정값으로 나눠 봅니다.
 * 광고로 들어온 방문은 페이지에서 withLandingUtm()이 광고 값으로 바꿉니다.
 * utm_* 값은 referrer 파라미터 안에 인코딩해 담아야
 * Play Console과 Install Referrer API에 잡힙니다.
 * 스토어 화면 언어(hl)는 보고 있던 페이지 언어를 따릅니다.
 */
export function storeUrl(placement: DownloadPlacement, lang: Lang = 'ko'): string {
  const referrer = new URLSearchParams({
    utm_source: 'website',
    utm_medium: 'organic',
    utm_campaign: 'landing',
    utm_content: placement,
  });
  const url = new URL(DOWNLOAD_URL);
  url.searchParams.set('hl', lang);
  url.searchParams.set('referrer', referrer.toString());
  return url.toString();
}

/**
 * 랜딩 주소(search)에 utm_* 값이 있으면 스토어 주소의 referrer를 그 값으로 바꿉니다.
 *
 * 광고(예: ?utm_source=meta&utm_medium=paid&...)로 들어와 설치한 사람을
 * 광고 캠페인으로 잡기 위해서입니다. 받은 utm_* 값은 이름과 순서 그대로 옮기고,
 * 하나도 없으면 storeUrl()이 넣은 웹사이트 값을 그대로 둡니다.
 */
export function withLandingUtm(href: string, search: string): string {
  const utm = [...new URLSearchParams(search)].filter(([key]) => key.startsWith('utm_'));
  if (utm.length === 0) return href;

  const url = new URL(href);
  url.searchParams.set('referrer', new URLSearchParams(utm).toString());
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
