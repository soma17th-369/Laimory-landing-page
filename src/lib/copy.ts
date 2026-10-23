/**
 * 화면에 보이는 모든 문구는 이 파일에서 관리합니다.
 * 한국어(ko)와 영어(en)가 같은 SiteCopy 모양이라, 한쪽에만 항목을 넣으면 타입 검사가 알려 줍니다.
 * 한국어 문구를 바꾸면 영어 문구도 함께 맞춰 주세요.
 */

import type { IconName } from './icons';
import type { SourceKey } from './sources';

/**
 * '어디서 가져오나요' 섹션의 안내 한 줄.
 * **굵게** 표시한 부분은 강조됩니다. sub는 그 아래 한 단계 들여 쓴 목록,
 * note는 sub 항목 밑에 붙는 보충 설명입니다.
 */
export type SourcePoint = string | { text: string; sub: (string | { text: string; note: string })[] };

/** 기록 카드 한 장(사진 · 위치)의 이름과, 그림 아래 붙는 시각 표시. */
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
    /** 왼쪽 기록 카드 묶음과 오른쪽 타임라인 카드 위의 작은 제목 */
    sourcesCaption: string;
    timelineCaption: string;
    /** 왼쪽 기록 카드 세 장. 화면에 놓이는 순서 그대로입니다. */
    /** 캘린더 칸은 시각이 그림 안에 있어 따로 시각 표시가 없습니다. */
    calendar: { title: string; event: string; start: string; end: string };
    photo: SourceItem & { alt: string };
    place: SourceItem & { alt: string };
    /** 가운데 '타임라인 만들기' 표시. 앱의 버튼 문구를 그대로 씁니다. */
    make: { title: string; sub: string };
    timelineTitle: string;
    date: string;
    /** 타임라인의 순간들. from은 어느 기록에서 왔는지(lib/sources.ts의 키)입니다. */
    entries: {
      time: string;
      text: string;
      from: SourceKey;
      icon: IconName;
      /** 카드에 보일 '○○에서' 표시 */
      fromLabel: string;
    }[];
  };
  how: {
    title: string;
    body: string;
    /** 폰 목업(홈 화면 캡처)의 접근성 설명 */
    alt: string;
    /**
     * 홈 화면의 일정 · 알림 칸에 번갈아 보이는 내용. 첫 항목이 캡처에 그려진 내용과 같습니다.
     * scheduleCount는 일정 칸 아래 '담긴 수 / 전체 수'입니다.
     */
    schedule: { time: string; title: string }[];
    scheduleCount: { picked: number; total: number };
    notifications: { app: string; count: number; icon: string }[];
  };
  /** 라이모리가 기록을 어디서 가져오는지 · 언제 밖으로 나가는지. 항목은 눌러야 펼쳐집니다. */
  sources: {
    title: string;
    intro: string;
    items: {
      key: 'photo' | 'calendar' | 'notification' | 'place' | 'outbound';
      /** 접혀 있을 때 보이는 이름과 한 줄 설명 */
      name: string;
      from: string;
      points: SourcePoint[];
    }[];
  };
  privacy: {
    titleLine1: string;
    titleLine2: string;
    /** label은 약속이 적용되는 시점, body는 그 시점의 약속 */
    points: { label: string; body: string }[];
    /** 폰 세 장(사진 · 위치 · 알림 고르기 화면) 묶음의 접근성 설명 */
    deviceLabel: string;
    /**
     * 사진 고르기 화면. 앱 화면을 HTML로 다시 그려, 사진의 체크가 저절로 켜지고 꺼지는 애니메이션을 보여 줍니다.
     * groups는 날짜 묶음, photos의 picked는 처음 체크 상태입니다.
     */
    picker: {
      date: string;
      groups: { date: string; photos: { alt: string; picked: boolean }[] }[];
    };
  };
  footer: {
    title: string;
    body: string;
    /** 마무리 다운로드 버튼 */
    cta: string;
    credit: string;
    /** 약관 링크 묶음의 접근성 레이블 */
    legal: string;
    /** 약관 링크 아래 안내. 약관 원문이 한국어뿐이라 영어 페이지에만 둡니다. */
    legalNote?: string;
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
    body: '폰 속 캘린더 일정, 사진, 위치 기록을 라이모리가 모아 시간순으로 엮어요. 따로 적지 않아도 오늘 하루가 한 편의 기록으로 남습니다.',
    demoLabel: '캘린더 · 사진 · 위치 기록이 오늘의 타임라인이 되는 예시',
    sourcesCaption: '내 폰에 이미 있는 기록',
    timelineCaption: '라이모리가 엮은 하루',
    calendar: { title: '캘린더', event: '기획 회의', start: '10:00', end: '11:00' },
    photo: {
      title: '사진',
      meta: '18:45 촬영',
      alt: '장바구니에 담긴 방울토마토, 달걀, 바나나, 채소',
    },
    place: { title: '위치', meta: '08:50 도착', alt: '역삼동 사무실 위치가 표시된 지도' },
    make: { title: '타임라인 만들기', sub: '오늘의 순간을 하나로' },
    timelineTitle: '오늘의 타임라인',
    date: '10월 1일 목요일',
    entries: [
      {
        time: '08:50',
        text: '오늘도 사무실로 출근했다.',
        from: 'place',
        icon: 'pin',
        fromLabel: '위치에서',
      },
      {
        time: '10:00',
        text: '오전엔 기획 회의가 있었다.',
        from: 'calendar',
        icon: 'briefcase',
        fromLabel: '캘린더에서',
      },
      {
        time: '18:45',
        text: '퇴근길에 마트에서 장을 봤다.',
        from: 'photo',
        icon: 'bag',
        fromLabel: '사진에서',
      },
    ],
  },

  how: {
    title: '한 번 연결해두면, 그다음은 알아서 모입니다.',
    body: '처음에 사진 · 캘린더 · 위치 · 활동 중 원하는 것만 고르면, 이후로는 AI가 매일 정리해서 타임라인을 만듭니다.',
    alt: 'Laimory 앱의 홈 화면. 오늘의 사진 · 일정 · 위치 · 알림이 한 화면에 모여 있고, 아래에 타임라인 만들기 버튼이 있습니다.',
    schedule: [
      { time: '19:00 ~ 21:00', title: '상민이랑 데이트' },
      { time: '10:00 ~ 11:00', title: '기획 회의' },
      { time: '18:30 ~ 20:00', title: '강남역 저녁 약속' },
    ],
    scheduleCount: { picked: 3, total: 3 },
    notifications: [
      { app: '토스', count: 4, icon: '/images/how-toss.webp' },
      { app: '카카오톡', count: 12, icon: '/images/how-kakao.webp' },
    ],
  },

  sources: {
    title: '라이모리는 내 기록을 어디서 가져오나요?',
    intro:
      '라이모리는 내 휴대폰 안에 이미 있는 정보를 모아 하루를 정리해요. 따로 계정을 연결하거나 다른 앱에 로그인하지 않아요. 휴대폰 설정에서 허락한 항목만 읽어요.',
    items: [
      {
        key: 'photo',
        name: '사진',
        from: "휴대폰 '갤러리'에서 가져와요",
        points: [
          '갤러리에 저장된 사진을 읽기만 하고, 지우거나 바꾸지 않아요.',
          '사진이 언제 찍혔는지, 그리고 사진에 위치가 저장돼 있다면 어디서 찍혔는지를 확인해요.',
          '스크린샷이나 내려받은 이미지도 갤러리에 있으면 후보로 보일 수 있어요. 대신 어떤 사진을 기록에 넣을지는 직접 고르세요.',
          '휴대폰 설정에서 **"선택한 사진만 허용"**을 고르면 그 사진들만 볼 수 있어요.',
          '기록을 만들 때 고른 사진은 원본 그대로 서버로 보내져요. AI가 사진 속 장면을 읽고 하루를 정리하는 데 써요.',
        ],
      },
      {
        key: 'calendar',
        name: '일정',
        from: "휴대폰 '캘린더' 앱에서 가져와요",
        points: [
          '휴대폰 캘린더에 등록된 일정을 읽기만 해요. 새로 만들거나 고치지 않아요.',
          {
            text: '내가 만든 캘린더의 일정만 봐요.',
            sub: [
              '휴대폰 기본 캘린더(삼성 캘린더 등)에 직접 등록한 일정',
              {
                text: '휴대폰과 연동된 구글 계정 캘린더 중 내가 만든 캘린더의 일정',
                note: '기본 캘린더뿐 아니라 "운동", "회사"처럼 내가 새로 만든 캘린더도 포함돼요.',
              },
              '그 밖에 휴대폰 캘린더와 동기화되도록 설정한 계정(예: Outlook)의 내 캘린더',
            ],
          },
          '공휴일 캘린더나 남이 공유해 준 캘린더는 읽지 않아요.',
          '최근 한 달 동안의 지난 일정만 확인해요. 앞으로 있을 일정은 보지 않아요.',
          '일정 제목, 시간, 장소, 메모를 읽어요. 메모가 길면 앞부분만 가져와요.',
        ],
      },
      {
        key: 'notification',
        name: '알림',
        from: '휴대폰 상단에 뜨는 알림에서 가져와요',
        points: [
          '휴대폰 설정의 **"알림 접근"**을 켜면, 그 뒤로 오는 알림만 확인해요. 켜기 전에 왔던 알림은 볼 수 없어요.',
          '결제, 주문·배송, 배달, 예약, 여행(출발·탑승) 같은 생활 기록이 될 만한 알림만 골라요.',
          '알림을 직접 눌렀다면 그 알림도 의미 있는 순간으로 보고 기록해요.',
          {
            text: '아래 알림은 가져오지 않아요.',
            sub: [
              '카카오톡 같은 대화 메시지 (직접 누른 경우는 예외)',
              '광고 알림, 다운로드 진행률처럼 계속 떠 있는 알림',
              '인증번호, 비밀번호가 담긴 알림',
              '주민등록번호, 여권번호 같은 신분 정보나 검사 결과가 담긴 알림',
            ],
          },
          '이메일, 카드번호, 전화번호, 계좌번호, 상세주소는 가린 뒤 저장해요. 예를 들어 전화번호는 [전화번호]로 바뀌어요.',
        ],
      },
      {
        key: 'place',
        name: '위치',
        from: '휴대폰 위치 기능에서 가져와요',
        points: [
          '앱을 쓰지 않을 때도 위치를 확인해서 어디에 머물렀고 어떻게 이동했는지 정리해요.',
          '위치를 확인하는 동안에는 휴대폰 상단에 알림이 계속 떠 있어요.',
          '"대략적인 위치"만 허용해도 쓸 수 있어요.',
        ],
      },
      {
        key: 'outbound',
        name: '내 정보는 언제 밖으로 나가나요?',
        from: '보낼 항목을 직접 확인했을 때만이에요',
        points: [
          '모은 정보는 평소에는 내 휴대폰 안에만 저장돼요.',
          '기록 만들기를 누르고, 보낼 항목을 직접 확인하고 동의했을 때만 AI 분석을 위해 서버로 보내져요.',
          '보낸 정보는 하루를 정리하는 AI 분석에만 쓰이고, 그 밖의 다른 용도로 열람되지 않으며 저장소에서 식별할 수 없는 상태로 저장돼요.',
          '각 항목은 언제든 설정 > 데이터 수집에서 끌 수 있어요.',
        ],
      },
    ],
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
    deviceLabel:
      'Laimory 앱의 사진 · 위치 · 알림 고르기 화면. 사진, 방문한 장소와 이동 기록, 알림마다 타임라인에 담을지 뺄지 직접 고르는 모습입니다.',
    picker: {
      date: '5월 8일 목요일',
      groups: [
        {
          date: '2025년 1월 12일',
          photos: [
            { alt: '크리스마스 장식이 걸린 아늑한 거실', picked: true },
            { alt: '눈 내린 저녁 거리', picked: true },
            { alt: '노트북이 놓인 책상', picked: false },
          ],
        },
        {
          date: '2025년 1월 10일',
          photos: [
            { alt: '토마토 파스타 한 접시', picked: true },
            { alt: '회색 콘크리트 건물', picked: true },
            { alt: '햇살이 드는 침실', picked: false },
          ],
        },
      ],
    },
  },

  footer: {
    title: '오늘부터 하루를 남겨보세요.',
    body: '지금 Google Play에서 라이모리를 받아보세요.',
    cta: 'Google Play에서 받기',
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

const en: SiteCopy = {
  meta: {
    title: 'Laimory - The AI that remembers your life',
    description:
      'Laimory is a journaling app that gathers your photos, calendar events, and location history, and uses AI to turn them into a timeline of your day.',
    ogImageAlt: 'The Laimory logo on a white background',
  },

  nav: {
    problem: 'Why Laimory',
    how: 'How it works',
    privacy: 'Privacy',
    download: 'Download',
  },

  hero: {
    titleLine1: 'What did you do today?',
    titleLine2: 'Laimory sums it up at a glance.',
    body: 'AI gathers your photos, calendar events, and location history into a timeline of your day.',
    ctaPrimary: 'Download the app',
    ctaSecondary: 'See how it works',
    deviceAlt: "Today's timeline screen in the Laimory app",
  },

  problem: {
    title: 'Memories fade, and journaling keeps getting put off.',
    panels: [
      {
        title: 'Remember what you did last Tuesday?',
        body: 'Piecing together a busy day from scratch is hard.',
        alt: 'A person on the subway home, looking out the window at the sunset',
      },
      {
        title: 'Stuck in front of a blank journal page?',
        body: 'By the time you sort out where you went and who you met, journaling gets put off again.',
        alt: 'A person at night holding a phone that shows an empty journal screen',
      },
    ],
    bridge:
      'Laimory brings your scattered records together—photos, calendar, GPS, and more—into a timeline of your day.',
  },

  result: {
    titleLine1: 'Scattered moments,',
    titleLine2: 'turned into a day you can read again.',
    body: 'Laimory gathers the calendar events, photos, and location history already on your phone and weaves them together in order. Without writing a word, your day is kept as a story of its own.',
    demoLabel: "An example of calendar, photo, and location records becoming today's timeline",
    sourcesCaption: 'Records already on your phone',
    timelineCaption: 'Your day, woven by Laimory',
    calendar: { title: 'Calendar', event: 'Planning meeting', start: '10:00', end: '11:00' },
    photo: {
      title: 'Photos',
      meta: 'Taken at 18:45',
      alt: 'Cherry tomatoes, eggs, bananas, and vegetables in a shopping basket',
    },
    place: { title: 'Location', meta: 'Arrived 08:50', alt: 'A map pinpointing an office in Yeoksam-dong, Seoul' },
    make: { title: 'Make a timeline', sub: "Today's moments, all in one" },
    timelineTitle: "Today's timeline",
    date: 'Thursday, October 1',
    entries: [
      {
        time: '08:50',
        text: 'Headed into the office as usual.',
        from: 'place',
        icon: 'pin',
        fromLabel: 'From Location',
      },
      {
        time: '10:00',
        text: 'Had a planning meeting in the morning.',
        from: 'calendar',
        icon: 'briefcase',
        fromLabel: 'From Calendar',
      },
      {
        time: '18:45',
        text: 'Picked up groceries on the way home.',
        from: 'photo',
        icon: 'bag',
        fromLabel: 'From Photos',
      },
    ],
  },

  how: {
    title: 'Connect once, and the rest gathers on its own.',
    body: 'Just choose what you want at the start—photos, calendar, location, or activity—and from then on, AI organizes it into your timeline every day.',
    alt: "The Laimory home screen. Today's photos, events, places, and notifications are gathered on one screen, with a Make a timeline button below.",
    // 앱 화면 캡처 위에 얹는 글자는 캡처와 같은 한국어로 둡니다. 앱이 한국어뿐이라 한 화면 안에서 언어가 섞이지 않게 합니다.
    schedule: ko.how.schedule,
    scheduleCount: ko.how.scheduleCount,
    notifications: ko.how.notifications,
  },

  sources: {
    title: 'Where does Laimory get my records?',
    intro:
      "Laimory organizes your day using information that's already on your phone. You don't link accounts or sign in to other apps. It only reads what you've allowed in your phone's settings.",
    items: [
      {
        key: 'photo',
        name: 'Photos',
        from: "From your phone's Gallery",
        points: [
          'It only reads photos saved in your gallery. It never deletes or changes them.',
          'It checks when each photo was taken and, if the photo has location data, where it was taken.',
          'Screenshots and downloaded images in your gallery may show up as candidates too, but you choose which photos go into a record.',
          'If you choose **"Allow selected photos only"** in your phone settings, it can see only those photos.',
          'Photos you pick when creating a record are sent to the server as original files. AI reads the scenes in them to organize your day.',
        ],
      },
      {
        key: 'calendar',
        name: 'Calendar',
        from: "From your phone's Calendar app",
        points: [
          'It only reads events in your phone calendar. It never creates or edits them.',
          {
            text: 'It only looks at events in calendars you created.',
            sub: [
              "Events you added directly to your phone's default calendar (e.g., Samsung Calendar)",
              {
                text: 'Events in calendars you created in the Google account synced to your phone',
                note: 'This includes not just the default calendar but also calendars you made yourself, like "Workout" or "Work."',
              },
              'Your own calendars in any other account set to sync with your phone calendar (e.g., Outlook)',
            ],
          },
          "It doesn't read holiday calendars or calendars other people have shared with you.",
          "It only checks past events from the last month. It doesn't look at upcoming events.",
          'It reads event titles, times, locations, and notes. For long notes, it only takes the beginning.',
        ],
      },
      {
        key: 'notification',
        name: 'Notifications',
        from: 'From the notifications at the top of your phone',
        points: [
          'Once you turn on **"Notification access"** in your phone settings, it only checks notifications that arrive after that. It can\'t see earlier ones.',
          'It picks out only notifications that make good life records, such as payments, orders and shipping, food delivery, reservations, and travel (departures and boarding).',
          'If you tapped a notification yourself, it treats that as a meaningful moment and records it too.',
          {
            text: "It doesn't collect the notifications below.",
            sub: [
              'Chat messages from apps like KakaoTalk (unless you tapped them)',
              'Ads, and persistent notifications like download progress',
              'Notifications containing verification codes or passwords',
              'Notifications containing identity details such as resident registration or passport numbers, or test results',
            ],
          },
          'Emails, card numbers, phone numbers, account numbers, and detailed addresses are masked before saving. For example, a phone number becomes [phone number].',
        ],
      },
      {
        key: 'place',
        name: 'Location',
        from: "From your phone's location services",
        points: [
          "It checks your location even when you're not using the app, to work out where you stayed and how you got around.",
          "While it's checking your location, a notification stays at the top of your phone.",
          'It works even if you only allow "Approximate location."',
        ],
      },
      {
        key: 'outbound',
        name: 'When does my information leave my phone?',
        from: "Only after you've reviewed what will be sent",
        points: [
          'The information it gathers normally stays stored on your phone only.',
          "It's sent to the server for AI analysis only when you tap Create record, review the items to be sent, and agree.",
          "What you send is used only for the AI analysis that organizes your day. It isn't viewed for any other purpose, and it's stored in a form that can't be identified.",
          'You can turn off each item at any time in Settings > Data collection.',
        ],
      },
    ],
  },

  privacy: {
    titleLine1: 'How much gets recorded',
    titleLine2: 'is up to you.',
    points: [
      { label: 'Before creating', body: 'See what will be included, and leave out what you want' },
      {
        label: 'After saving',
        body: "Kept in a form that can't be traced back to you, and deletable at any time",
      },
    ],
    deviceLabel:
      'The photo, place, and notification picker screens in the Laimory app, where you choose whether each photo, visited place, route, and notification goes into your timeline.',
    // 사진 고르기 화면은 옆 두 폰(앱 캡처)과 맞춰 날짜를 한국어로 둡니다. 사진 설명만 영어입니다.
    picker: {
      date: ko.privacy.picker.date,
      groups: [
        {
          date: ko.privacy.picker.groups[0].date,
          photos: [
            { alt: 'A cozy living room with Christmas decorations', picked: true },
            { alt: 'A snowy street in the evening', picked: true },
            { alt: 'A desk with a laptop on it', picked: false },
          ],
        },
        {
          date: ko.privacy.picker.groups[1].date,
          photos: [
            { alt: 'A plate of tomato pasta', picked: true },
            { alt: 'A gray concrete building', picked: true },
            { alt: 'A sunlit bedroom', picked: false },
          ],
        },
      ],
    },
  },

  footer: {
    title: 'Start keeping your days today.',
    body: 'Get Laimory on Google Play now.',
    cta: 'Get it on Google Play',
    legal: 'Terms and policies',
    legalNote: 'Our terms and policies are available in Korean only.',
    links: {
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
      sensitiveInformationConsent: 'Sensitive Information Consent',
      thirdPartyProvisionConsent: 'Third-Party Provision Consent',
      crossBorderTransferConsent: 'Cross-Border Transfer Consent',
      locationBasedServiceTerms: 'Location-Based Service Terms',
    },
    business: {
      label: 'Business information',
      ownerLabel: 'Business · Representative',
      owner: 'DongGeon Lee',
      registrationLabel: 'Business registration no.',
      addressLabel: 'Address',
      address: '85 Jibeom-ro 17-gil, Suseong-gu, Daegu, Republic of Korea',
      lbsLabel: 'Location-based service report no.',
      privacyOfficerLabel: 'Chief privacy officer',
      privacyOfficer: 'DongGeon Lee',
      contactLabel: 'Contact',
    },
    credit: 'Team 369 · Laimory',
  },
};

/** 언어별 문구. 컴포넌트에서는 lib/i18n.ts의 useCopy(Astro.currentLocale)로 꺼내 씁니다. */
export const copies = { ko, en } satisfies Record<string, SiteCopy>;

/** 기본 언어(한국어) 문구. 언어 구분 없이 한국어로만 보이는 페이지에서 씁니다. */
export const copy = ko;
