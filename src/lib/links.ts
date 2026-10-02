/**
 * 바깥으로 나가는 링크를 한곳에 모아 둡니다.
 */

/** 스토어 주소. 지금은 구조화 데이터(Layout.astro의 JSON-LD)에서만 씁니다. */
export const DOWNLOAD_URL =
  'https://play.google.com/store/apps/details?id=com.soma369.laimory';

/** 헤더 · 히어로의 사전등록 버튼이 내려가는 푸터 양식의 앵커. */
export const PREREGISTER_ANCHOR = '#preregister';

/**
 * 사전등록 신청을 받는 Google 폼.
 *
 * 푸터 양식이 입력값을 이 폼의 응답 주소(formResponse)로 바로 보내고,
 * 응답은 폼에 연결한 Google 스프레드시트에 쌓입니다.
 *
 * 값은 폼 편집 화면 ⋮ → '미리 채워진 링크 가져오기'로 만든 주소에서 옮겨 옵니다.
 *   https://docs.google.com/forms/d/e/{폼 ID}/viewform?usp=pp_url&entry.{번호}=...
 * - phone:   전화번호를 받는 단답형 문항
 * - consent: 동의 내용을 남기는 단답형 문항 (어떤 문구에 동의했는지 증빙)
 *
 * 폼은 로그인 없이 응답할 수 있어야 하고, 이메일 주소를 수집하지 않아야 합니다.
 * 동의 문구(lib/copy.ts의 preregister.consents)를 바꾸면 CONSENT_VERSION도 올리세요.
 */
export const PREREGISTER_FORM = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSdcjMAYcjH9bj6P0mIqxbGNiUtRj2gT6rxf99_At3I9IywUIA/formResponse',
  fields: {
    phone: 'entry.1035407657',
    consent: 'entry.1138571508',
  },
} as const;

export const CONSENT_VERSION = '2026-10-02';

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
