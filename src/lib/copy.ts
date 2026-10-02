/**
 * 화면에 보이는 모든 문구는 이 파일에서 관리합니다.
 */

/**
 * 데이터 소스 한 종(사진 · 캘린더 · 위치 · 알림)의 문구.
 * 배열 순서가 lib/sources.ts의 아이콘·배지 색과 1:1로 맞아야 합니다.
 */
export interface SourceItem {
  title: string;
  meta: string;
}

export interface SiteCopy {
  meta: {
    title: string;
    description: string;
    /** SNS 공유 이미지(og:image)의 접근성 설명 */
    ogImageAlt: string;
  };
  nav: { problem: string; how: string; privacy: string; preregister: string };
  hero: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** 폰 목업(앱 화면 캡처)의 접근성 설명 */
    deviceAlt: string;
  };
  problem: {
    title: string;
    /** 사진 두 장 위에 얹히는 질문. 순서는 왼쪽(퇴근길) → 오른쪽(밤, 빈 일기) */
    panels: { title: string; body: string; alt: string }[];
    bridge: string;
  };
  result: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    /** 데모(기록 카드 → 타임라인) 묶음의 접근성 레이블 */
    demoLabel: string;
    /** 데모 왼쪽의 기록 카드 4장. 순서는 lib/sources.ts를 따릅니다. */
    sources: SourceItem[];
  };
  how: {
    title: string;
    body: string;
    /** 폰 목업(설정 화면 캡처)의 접근성 설명 */
    alt: string;
  };
  privacy: {
    titleLine1: string;
    titleLine2: string;
    /** label은 약속이 적용되는 시점, body는 그 시점의 약속 */
    points: { label: string; body: string }[];
    /** 폰 목업(위치 기록 화면 캡처)의 접근성 설명 */
    alt: string;
  };
  /** 푸터의 사전등록 양식. 헤더·히어로의 사전등록 버튼이 이곳으로 내려옵니다. */
  preregister: {
    body: string;
    phoneLabel: string;
    phonePlaceholder: string;
    /** 동의 항목 묶음의 접근성 레이블 */
    consentLegend: string;
    agreeAll: string;
    /** 필수 동의 항목. details는 펼쳐 보는 고지 내용(용어 · 설명)입니다. */
    consents: { label: string; details: { term: string; desc: string }[] }[];
    viewDetails: string;
    /** 동의 철회 · 삭제 요청 안내 */
    note: string;
    submit: string;
    submitting: string;
    done: string;
    errors: { phone: string; network: string };
  };
  footer: {
    title: string;
    credit: string;
    /** 약관 링크 묶음의 접근성 레이블 */
    legal: string;
    /** 키가 lib/links.ts의 TERMS_URL과 1:1로 대응합니다. */
    links: {
      termsOfService: string;
      privacyPolicy: string;
      sensitiveInformationConsent: string;
      thirdPartyProvisionConsent: string;
      crossBorderTransferConsent: string;
      locationBasedServiceTerms: string;
    };
    /** 사업자 정보. 번호·이메일 등 문구가 아닌 값은 lib/business.ts에 있습니다. */
    business: {
      label: string;
      ownerLabel: string;
      owner: string;
      registrationLabel: string;
      addressLabel: string;
      address: string;
      lbsLabel: string;
      privacyOfficerLabel: string;
      privacyOfficer: string;
      contactLabel: string;
    };
  };
}

const ko: SiteCopy = {
  meta: {
    title: '라이모리 Laimory - 나의 삶을 기억하는 AI',
    description:
      '사진과 일정, 이동 기록을 모아 AI가 오늘의 타임라인을 만들어 주는 기록 앱, 라이모리(Laimory).',
    ogImageAlt: '흰 바탕 위의 라이모리(Laimory) 로고',
  },

  nav: {
    problem: '왜 필요한가요',
    how: '사용 방법',
    privacy: '개인정보',
    preregister: '사전등록',
  },

  hero: {
    titleLine1: '오늘 뭐 했는지,',
    titleLine2: '라이모리가 한눈에 정리해드려요',
    body: '사진과 일정, 이동 기록을 모아 AI가 오늘의 타임라인을 만들어드려요.',
    ctaPrimary: '사전등록',
    ctaSecondary: '어떻게 작동하나요',
    deviceAlt: 'Laimory 앱의 오늘의 타임라인 화면',
  },

  problem: {
    title: '기억은 흐려지고, 기록은 자꾸 미뤄집니다.',
    panels: [
      {
        title: '지난주 화요일, 뭐 했는지 기억나세요?',
        body: '바쁘게 지나간 하루를 처음부터 떠올리기는 어렵습니다.',
        alt: '퇴근길 지하철에서 노을이 지는 창밖을 바라보는 사람',
      },
      {
        title: '일기, 빈 화면 앞에서 막히시나요?',
        body: '어디에 갔고 누구를 만났는지 정리하다 보면 기록은 또 미뤄집니다.',
        alt: '밤에 빈 일기 화면이 켜진 휴대폰을 들고 있는 사람',
      },
    ],
    bridge: 'Laimory는 사진, 캘린더, GPS 등 흩어진 기록을 모아 하루의 타임라인을 만듭니다.',
  },

  result: {
    titleLine1: '흩어진 순간을,',
    titleLine2: '다시 읽을 수 있는 하루로.',
    body: '언제 어디에 있었고 무엇을 했는지가 사진과 함께 시간순으로 남습니다.',
    demoLabel: '흩어진 기록이 오늘의 타임라인이 되는 예시',
    sources: [
      { title: '사진 1장', meta: '12:00 · 마포' },
      { title: '팀 작업', meta: '13:19~18:30' },
      { title: '용인 → 마포', meta: '09:13 · 46.1km' },
      { title: '결제 알림', meta: '복성각 · 17:25' },
    ],
  },

  how: {
    title: '한 번 연결해두면, 그다음은 알아서 모입니다.',
    body: '처음에 사진 · 캘린더 · 위치 · 활동 중 원하는 것만 고르면, 이후로는 AI가 매일 정리해서 타임라인을 만듭니다.',
    alt: 'Laimory 앱의 데이터 소스 설정 화면',
  },

  privacy: {
    titleLine1: '어디까지 기록할지는',
    titleLine2: '내가 정합니다.',
    points: [
      { label: '만들기 전', body: '무엇이 담길지 확인하고 뺄 수 있습니다' },
      {
        label: '저장된 뒤',
        body: '누가 쓴 것인지 알 수 없는 형태로 보관되고, 언제든 삭제할 수 있습니다',
      },
    ],
    alt: 'Laimory 앱의 위치 기록 화면. 수집된 장소 가운데 보낼 것만 고를 수 있습니다.',
  },

  preregister: {
    body: '전화번호를 남겨주시면 출시되는 날 문자로 알려드려요.',
    phoneLabel: '휴대전화번호',
    phonePlaceholder: '휴대전화번호 (01012345679)',
    consentLegend: '사전등록 약관 동의',
    agreeAll: '전체 동의',
    consents: [
      { label: '[필수] 만 14세 이상입니다', details: [] },
      {
        label: '[필수] 개인정보 수집·이용 동의',
        details: [
          { term: '수집 목적', desc: '라이모리 출시 알림 문자 발송' },
          { term: '수집 항목', desc: '휴대전화번호 (신청 일시와 동의 내용은 자동으로 기록)' },
          { term: '보유·이용 기간', desc: '출시 알림 발송 후 지체 없이 파기' },
          {
            term: '동의 거부',
            desc: '동의를 거부할 수 있으며, 거부하면 사전등록을 신청할 수 없습니다.',
          },
        ],
      },
      {
        label: '[필수] 개인정보 국외 이전 동의',
        details: [
          { term: '이전받는 자', desc: 'Google LLC (googlekrsupport@google.com)' },
          { term: '이전 국가', desc: '미국 및 Google이 데이터센터를 운영하는 국가' },
          { term: '이전 일시·방법', desc: '사전등록 신청 시 암호화된 통신으로 전송' },
          { term: '이전 항목', desc: '휴대전화번호, 신청 일시, 동의 내용' },
          {
            term: '이용 목적',
            desc: '사전등록 신청 정보의 저장·관리 (Google Forms · Google 스프레드시트)',
          },
          { term: '보유·이용 기간', desc: '출시 알림 발송 후 지체 없이 파기' },
          {
            term: '동의 거부',
            desc: '동의를 거부할 수 있으며, 거부하면 사전등록을 신청할 수 없습니다.',
          },
        ],
      },
    ],
    viewDetails: '내용 보기',
    note: '동의 철회와 삭제 요청은 contact@laimory.app으로 보내주세요.',
    submit: '사전등록',
    submitting: '등록하는 중…',
    done: '사전등록이 완료됐어요. 출시되면 문자로 알려드릴게요.',
    errors: {
      phone: '휴대전화번호를 정확히 입력해 주세요. (예: 01012345679)',
      network: '등록하지 못했어요. 잠시 후 다시 시도해 주세요.',
    },
  },

  footer: {
    title: '오늘부터 하루를 남겨보세요.',
    legal: '약관 및 정책',
    links: {
      termsOfService: '이용약관',
      privacyPolicy: '개인정보 처리방침',
      sensitiveInformationConsent: '민감정보 처리 동의',
      thirdPartyProvisionConsent: '제3자 제공 동의',
      crossBorderTransferConsent: '국외 이전 동의',
      locationBasedServiceTerms: '위치기반서비스 이용약관',
    },
    business: {
      label: '사업자 정보',
      ownerLabel: '사업자명 · 대표',
      owner: '이동건',
      registrationLabel: '사업자등록번호',
      addressLabel: '주소',
      address: '대구광역시 수성구 지범로17길 85',
      lbsLabel: '위치기반서비스사업 신고번호',
      privacyOfficerLabel: '개인정보 보호책임자',
      privacyOfficer: '이동건',
      contactLabel: '문의',
    },
    credit: 'Team 369 · Laimory',
  },
};

export const copy = ko;
