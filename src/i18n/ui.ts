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
  meta: { title: string; description: string };
  nav: { problem: string; how: string; privacy: string; download: string };
  hero: {
    eyebrow: string;
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
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    /** 왼쪽에 나열되는 '모아 오는 기록' 네 가지 */
    inputs: string[];
    /** 데모(기록 카드 → 타임라인) 묶음의 접근성 레이블 */
    demoLabel: string;
    /** 데모 왼쪽의 기록 카드 4장. 순서는 lib/sources.ts를 따릅니다. */
    sources: SourceItem[];
    timeline: {
      label: string;
      date: string;
      /** 첫 항목에만 사진 조각이 붙습니다. */
      entries: { time: string; title: string; meta?: string }[];
      draftLabel: string;
      draft: string;
    };
    outro: string;
  };
  how: {
    title: string;
    /** alt는 각 단계의 앱 화면 캡처 설명 */
    steps: { title: string; body: string; alt: string }[];
  };
  privacy: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    points: string[];
    /** 목업 안의 '오늘 수집된 기록' 확인 화면 */
    screen: {
      title: string;
      bodyLine1: string;
      bodyLine2: string;
      items: SourceItem[];
      note: string;
      cta: string;
    };
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
    title: 'Laimory — 나의 삶을 기억하는 AI',
    description:
      '사진과 일정, 이동 기록을 모아 AI가 오늘의 타임라인과 일기 초안을 만들어 주는 기록 앱, Laimory.',
  },

  nav: {
    problem: '왜 필요한가요',
    how: '사용 방법',
    privacy: '개인정보',
    download: '앱 다운로드',
  },

  hero: {
    eyebrow: 'LIFE + AI + MEMORY',
    titleLine1: '오늘 뭐 했는지,',
    titleLine2: 'AI가 한눈에 정리해드려요',
    body: '사진과 일정, 이동 기록을 모아 AI가 오늘의 타임라인과 일기 초안을 만들어드려요.',
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
    eyebrow: 'RESULT',
    titleLine1: '흩어진 순간을,',
    titleLine2: '다시 읽을 수 있는 하루로.',
    inputs: ['찍었던 사진들', '캘린더에 등록된 일정들', '수집된 GPS 위치 정보들', '저장된 알림들'],
    demoLabel: '흩어진 기록이 오늘의 타임라인과 일기 초안이 되는 예시',
    sources: [
      { title: '사진 3장', meta: '09:12 · 성수동' },
      { title: '팀 미팅', meta: '14:00~15:00' },
      { title: '강남역 → 성수역', meta: '7호선 · 18:40' },
      { title: '알림 5건', meta: '메시지 · 예약 확인' },
    ],
    timeline: {
      label: '오늘의 타임라인',
      date: '9월 4일 목요일',
      entries: [
        { time: '09:12', title: '성수동 카페에서 오전' },
        { time: '14:00', title: '팀 미팅', meta: '14:00~15:00' },
        { time: '18:40', title: '퇴근길, 7호선', meta: '강남 → 성수' },
      ],
      draftLabel: 'AI 일기 초안',
      draft: '오랜만에 팀이 다 모였다. 성수까지 오간 길이 길었지만, 돌아보니 꽉 찬 하루였다.',
    },
    outro: '흩어져 있던 기록이 모여, 다시 읽을 수 있는 하루와 일기 초안이 됩니다.',
  },

  how: {
    title: '모으고, 정리하고, 내가 마무리합니다.',
    steps: [
      {
        title: '연결합니다',
        body: '사진 · 캘린더 · 위치 · 활동 중 원하는 기록만 연결합니다.',
        alt: 'Laimory 앱의 데이터 소스 설정 화면',
      },
      {
        title: '정리합니다',
        body: 'AI가 기록을 시간순으로 묶고 일기 초안을 만듭니다.',
        alt: 'Laimory 앱의 오늘의 타임라인 화면',
      },
      {
        title: '마무리합니다',
        body: '내용을 확인하고 고치거나 지우면 하루가 완성됩니다.',
        alt: 'Laimory 앱의 타임라인 편집 화면',
      },
    ],
  },

  privacy: {
    eyebrow: 'PRIVACY',
    titleLine1: '어디까지 기록할지는',
    titleLine2: '내가 정합니다.',
    points: [
      '타임라인을 만들기 전, 수집된 기록을 먼저 확인합니다',
      '저장된 기록은 작성자를 식별할 수 없는 형태로 보관됩니다',
      '원하지 않는 기록은 만들기 전에 뺄 수 있습니다',
      '모든 기록은 언제든 통째로 삭제할 수 있습니다',
    ],
    screen: {
      title: '오늘 수집된 기록이에요',
      bodyLine1: '타임라인을 만들기 전에 확인해 주세요.',
      bodyLine2: '빼고 싶은 기록은 지금 끌 수 있어요.',
      items: [
        { title: '사진 23장', meta: '오늘 09:00~19:20' },
        { title: '일정 3건', meta: '캘린더' },
        { title: '이동 경로 2건', meta: '강남역 → 성수역 · 7호선' },
        { title: '알림 5건', meta: '메시지 · 예약 확인' },
      ],
      note: '이 기록은 작성자를 알 수 없는 형태로 저장돼요.',
      cta: '이 내용으로 타임라인 만들기',
    },
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
    title: 'Laimory — the AI that remembers your life',
    description:
      'Laimory gathers your photos, schedule and movements, and AI turns them into a timeline of the day and a draft journal entry.',
  },

  nav: {
    problem: 'Why Laimory',
    how: 'How it works',
    privacy: 'Privacy',
    download: 'Download',
  },

  hero: {
    eyebrow: 'LIFE + AI + MEMORY',
    titleLine1: 'Everything you did today,',
    titleLine2: 'laid out at a glance',
    body: 'Laimory gathers your photos, schedule and movements, and AI turns them into a timeline of the day and a draft journal entry.',
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
    eyebrow: 'RESULT',
    titleLine1: 'Scattered moments,',
    titleLine2: 'turned into a day you can read again.',
    inputs: ['The photos you took', 'Events on your calendar', 'GPS location history', 'Saved notifications'],
    demoLabel: 'Example of scattered records becoming a timeline of the day and a draft journal entry',
    sources: [
      { title: '3 photos', meta: '09:12 · Seongsu' },
      { title: 'Team meeting', meta: '14:00–15:00' },
      { title: 'Gangnam → Seongsu', meta: 'Line 7 · 18:40' },
      { title: '5 notifications', meta: 'Messages · Booking confirmed' },
    ],
    timeline: {
      label: 'TODAY’S TIMELINE',
      date: 'Thursday, Sep 4',
      entries: [
        { time: '09:12', title: 'Morning at a café in Seongsu' },
        { time: '14:00', title: 'Team meeting', meta: '14:00–15:00' },
        { time: '18:40', title: 'Commute home, Line 7', meta: 'Gangnam → Seongsu' },
      ],
      draftLabel: 'AI DRAFT',
      draft:
        'The whole team was together for the first time in a while. The trip to Seongsu and back was long, but looking back, it was a full day.',
    },
    outro: 'Scattered records come together into a day you can read again, and a draft of your journal.',
  },

  how: {
    title: 'Gather, arrange, and you finish.',
    steps: [
      {
        title: 'Connect',
        body: 'Connect only the records you want: photos, calendar, places, activity.',
        alt: 'The data source settings screen of the Laimory app',
      },
      {
        title: 'Arrange',
        body: 'AI groups the records in order and drafts the journal entry.',
        alt: 'The daily timeline screen of the Laimory app',
      },
      {
        title: 'Finish',
        body: 'Check, fix or remove what you like, and the day is complete.',
        alt: 'The timeline editing screen of the Laimory app',
      },
    ],
  },

  privacy: {
    eyebrow: 'PRIVACY',
    titleLine1: 'How much gets recorded',
    titleLine2: 'is up to me.',
    points: [
      'You review the collected records before the timeline is built',
      'Stored records are kept in a form that cannot identify who wrote them',
      'Anything you do not want can be left out before it is built',
      'Everything can be deleted at once, whenever you like',
    ],
    screen: {
      title: 'Records collected today',
      bodyLine1: 'Review them before the timeline is built.',
      bodyLine2: 'Anything you want to leave out can be turned off now.',
      items: [
        { title: '23 photos', meta: 'Today 09:00–19:20' },
        { title: '3 events', meta: 'Calendar' },
        { title: '2 trips', meta: 'Gangnam → Seongsu · Line 7' },
        { title: '5 notifications', meta: 'Messages · Booking confirmed' },
      ],
      note: 'These records are stored without anything that identifies you.',
      cta: 'Build the timeline from this',
    },
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
