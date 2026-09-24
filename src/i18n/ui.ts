/**
 * 화면에 보이는 모든 문구는 이 파일에서 관리합니다.
 * 새 언어를 추가하려면 copy 객체에 키를 하나 더 넣고
 * astro.config.mjs의 locales 배열에도 추가하세요.
 */

export const languages = {
  ko: '한국어',
  en: 'English',
} as const;

export const defaultLang = 'ko';

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
  nav: { problem: string; how: string; privacy: string; download: string };
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
  footer: {
    title: string;
    cta: string;
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
    /** 약관이 한국어로만 제공된다는 안내. 한국어판에는 불필요해 빈 문자열입니다. */
    legalNote: string;
    /** 사업자 정보. 번호·이메일 등 언어 무관한 값은 lib/business.ts에 있습니다. */
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
    title: 'Laimory - 나의 삶을 기억하는 AI',
    description:
      '사진과 일정, 이동 기록을 모아 AI가 오늘의 타임라인을 만들어 주는 기록 앱, Laimory.',
    ogImageAlt: '흰 바탕 위의 Laimory 로고',
  },

  nav: {
    problem: '왜 필요한가요',
    how: '사용 방법',
    privacy: '개인정보',
    download: '앱 다운로드',
  },

  hero: {
    titleLine1: '오늘 뭐 했는지,',
    titleLine2: '라이모리가 한눈에 정리해드려요',
    body: '사진과 일정, 이동 기록을 모아 AI가 오늘의 타임라인을 만들어드려요.',
    ctaPrimary: '앱 다운로드',
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
      { title: '사진 3장', meta: '09:12 · 성수동' },
      { title: '팀 미팅', meta: '14:00~15:00' },
      { title: '강남역 → 성수역', meta: '7호선 · 18:40' },
      { title: '알림 5건', meta: '메시지 · 예약 확인' },
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

  footer: {
    title: '오늘부터 하루를 남겨보세요.',
    cta: '앱 다운로드',
    legal: '약관 및 정책',
    links: {
      termsOfService: '이용약관',
      privacyPolicy: '개인정보 처리방침',
      sensitiveInformationConsent: '민감정보 처리 동의',
      thirdPartyProvisionConsent: '제3자 제공 동의',
      crossBorderTransferConsent: '국외 이전 동의',
      locationBasedServiceTerms: '위치기반서비스 이용약관',
    },
    legalNote: '',
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

const en: SiteCopy = {
  meta: {
    title: 'Laimory - the AI that remembers your life',
    description:
      'Laimory gathers your photos, schedule and movements, and AI turns them into a timeline of the day.',
    ogImageAlt: 'Laimory logo on a white background',
  },

  nav: {
    problem: 'Why Laimory',
    how: 'How it works',
    privacy: 'Privacy',
    download: 'Download',
  },

  hero: {
    titleLine1: 'Everything you did today,',
    titleLine2: 'laid out at a glance',
    body: 'Laimory gathers your photos, schedule and movements, and AI turns them into a timeline of the day.',
    ctaPrimary: 'Download the app',
    ctaSecondary: 'See how it works',
    deviceAlt: 'The daily timeline screen of the Laimory app',
  },

  problem: {
    title: 'Memories fade, and the writing keeps getting put off.',
    panels: [
      {
        title: 'Remember what you did last Tuesday?',
        body: 'A busy day is hard to piece back together from the start.',
        alt: 'A person on the evening subway home, looking out at the sunset',
      },
      {
        title: 'Stuck in front of a blank journal page?',
        body: 'By the time you sort out where you went and who you met, the writing gets put off again.',
        alt: 'A person at night holding a phone with an empty journal screen',
      },
    ],
    bridge: 'Laimory gathers the scattered traces of your day, photos, calendar, GPS and more, into a single timeline.',
  },

  result: {
    titleLine1: 'Scattered moments,',
    titleLine2: 'turned into a day you can read again.',
    body: 'Where you were and what you did, kept in order with the photos you took.',
    demoLabel: 'Example of scattered records becoming a timeline of the day',
    sources: [
      { title: '3 photos', meta: '09:12 · Seongsu' },
      { title: 'Team meeting', meta: '14:00-15:00' },
      { title: 'Gangnam → Seongsu', meta: 'Line 7 · 18:40' },
      { title: '5 notifications', meta: 'Messages · Booking confirmed' },
    ],
  },

  how: {
    title: 'Connect once, and it gathers on its own.',
    body: 'Pick what you want at the start: photos, calendar, places, activity. After that Laimory sorts out each day into a timeline.',
    alt: 'The data source settings screen of the Laimory app',
  },

  privacy: {
    titleLine1: 'How much gets recorded',
    titleLine2: 'is up to me.',
    points: [
      { label: 'Before it is built', body: 'You see what will go in, and can leave anything out' },
      {
        label: 'Once it is stored',
        body: 'It is kept in a form that does not identify who wrote it, and can be deleted at any time',
      },
    ],
    alt: 'The location records screen of the Laimory app, where you choose which places to send.',
  },

  footer: {
    title: 'Start keeping your days, from today.',
    cta: 'Download the app',
    legal: 'Legal',
    links: {
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
      sensitiveInformationConsent: 'Sensitive Information Consent',
      thirdPartyProvisionConsent: 'Third-Party Provision Consent',
      crossBorderTransferConsent: 'Cross-Border Transfer Consent',
      locationBasedServiceTerms: 'Location-Based Service Terms',
    },
    legalNote: 'The legal documents are provided in Korean.',
    business: {
      label: 'Business information',
      ownerLabel: 'Business name · Representative',
      owner: 'DongGeon Lee',
      registrationLabel: 'Business registration number',
      addressLabel: 'Address',
      address: '85 Jibeom-ro 17-gil, Suseong-gu, Daegu, Republic of Korea',
      lbsLabel: 'Location-based service report number',
      privacyOfficerLabel: 'Privacy officer',
      privacyOfficer: 'DongGeon Lee',
      contactLabel: 'Contact',
    },
    credit: 'Team 369 · Laimory',
  },
};

export const copy = { ko, en } as const;

export type Lang = keyof typeof copy;
