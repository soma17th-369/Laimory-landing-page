/**
 * 사업자 정보 중 언어와 무관한 값들.
 *
 * 번호·이메일은 한국어판과 영어판이 같아야 하므로 i18n에 넣지 않고 여기 둡니다.
 * (양쪽에 적어 두면 한쪽만 고쳐져 어긋나기 쉽습니다.)
 *
 * 이 값들의 원본은 약관 원문입니다. 바꿀 일이 생기면 약관 쪽과 함께 맞추세요.
 * → public/terms/location-based-service-terms/1.0.html 의 '사업자 정보'
 *
 * 통신판매업 신고번호는 재화·용역을 판매하지 않아 해당 사항이 없습니다.
 */
export const BUSINESS = {
  /** 사업자등록번호 */
  registrationNumber: '536-14-02770',
  /** 위치기반서비스사업 신고번호 (신고일 2026-08-28) */
  lbsReportNumber: '1464',
  /** 대표 문의 창구 */
  email: 'laimory369@gmail.com',
} as const;
