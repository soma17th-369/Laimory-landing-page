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

/** 앱 목업 타임라인 한 칸 */
export interface AppEntry {
  time: string;
  title: string;
  /** 부제가 없는 항목도 있습니다. */
  place: string;
  note: string;
  /** 사진 썸네일 자리를 보여줄지 */
  photos: boolean;
}

export interface SiteCopy {
  meta: { title: string; description: string };
  nav: { how: string; sources: string; control: string; download: string };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metaSources: string;
    metaConsent: string;
  };
  moments: { title: string; body: string; imageAlt: string };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  sources: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    items: { title: string; body: string }[];
  };
  control: {
    eyebrow: string;
    title: string;
    body: string;
    aiLabel: string;
    aiText: string;
    myLabel: string;
    myText: string;
  };
  mood: {
    question: string;
    joy: string;
    calm: string;
    mellow: string;
    weary: string;
    down: string;
  };
  footer: { tagline: string; cta: string; credit: string };
  /** 목업 안에 들어가는 앱 화면 문구 */
  app: {
    time: string;
    date: string;
    aiTitle: string;
    aiBody: string;
    moodTitle: string;
    moodBody: string;
    timelineLabel: string;
    add: string;
    entries: AppEntry[];
  };
}

const ko: SiteCopy = {
  meta: {
    title: 'Laimory — 나의 삶을 기억하는 AI',
    description:
      '사진과 캘린더, 오갔던 길과 활동을 모아 오늘의 타임라인을 만들고 일기 초안까지 미리 써 두는 AI 기록 앱, Laimory.',
  },

  nav: {
    how: '작동 방식',
    sources: '데이터 소스',
    control: '기록 권한',
    download: '앱 다운로드',
  },

  hero: {
    eyebrow: 'LIFE + AI + MEMORY',
    titleLine1: '오늘 뭐 했는지,',
    titleLine2: 'AI가 한눈에 정리해드려요',
    body: '사진과 캘린더, 오갔던 길과 활동을 모아 오늘의 타임라인을 만들고, 일기 초안까지 미리 써 둡니다.',
    ctaPrimary: '앱 다운로드',
    ctaSecondary: '어떻게 작동하나요',
    metaSources: '사진 · 캘린더 · 위치 · 활동',
    metaConsent: '허락하신 만큼만',
  },

  moments: {
    title: '지난 주엔 뭘 하셨나요?',
    body: '쏜살같이 지나간 하루. 소중했던 순간도, 버거웠던 순간도 언젠가 다시 꺼내보고 싶어져요. 하지만 하루 끝에서 처음부터 떠올리는 건 생각보다 어려운 일입니다.',
    imageAlt: '하루의 한 장면',
  },

  how: {
    eyebrow: 'HOW IT WORKS',
    title: '세 단계면 하루가 남습니다',
    steps: [
      {
        title: '모읍니다',
        body: '사진 · 캘린더 · 위치 · 활동을 허락하신 만큼만 가져옵니다. 따로 적을 것은 없어요.',
      },
      {
        title: '정리합니다',
        body: '흩어진 조각이 시간순 타임라인이 되고, AI가 오늘의 일기 초안을 대신 써 둡니다.',
      },
      {
        title: '다듬습니다',
        body: '마음에 드는 부분만 남기고 고치면 끝. 오늘의 감정도 한 번의 터치로 남습니다.',
      },
    ],
  },

  sources: {
    titleLine1: '이미 남아 있는 것들에서',
    titleLine2: '하루를 읽습니다',
    body: '새로 기록하실 것은 없습니다. 쓰던 캘린더와 찍어둔 사진을 그대로 읽어옵니다.',
    items: [
      { title: '사진', body: '찍힌 시간과 장소까지 함께' },
      { title: '캘린더', body: '쓰던 일정을 그대로 읽어요' },
      { title: '위치', body: '강남역 → 성수역 · 7호선' },
      { title: '활동', body: '걸음과 움직임으로 하루를 채워요' },
    ],
  },

  control: {
    eyebrow: 'CONTROL',
    title: '기록의 주인은 언제나 나',
    body: 'AI가 써 둔 초안은 어디까지나 초안입니다. 틀린 건 고치고, 남길 건 직접 정하세요.',
    aiLabel: 'AI가 정리한 사건',
    aiText: '성수에서 팀 미팅',
    myLabel: '내가 더한 한 줄',
    myText: '오랜만에 다 같이 만나서 즐거웠다.',
  },

  mood: {
    question: '오늘은 어떤 하루였나요?',
    joy: '활기',
    calm: '평온',
    mellow: '무덤덤',
    weary: '지침',
    down: '울적',
  },

  footer: {
    tagline: '기억하려고 애쓰지 않아도, 하루는 남습니다.',
    cta: '앱 다운로드',
    credit: 'Team 369 · Laimory',
  },

  app: {
    time: '9:30',
    date: '5월 8일 목요일',
    aiTitle: 'AI가 하루를 정리했어요',
    aiBody: '마음에 드는 부분만 남기고 다듬어 보세요.',
    moodTitle: '오늘은 어떤 하루였나요?',
    moodBody: '가장 가까운 감정을 골라주세요.',
    timelineLabel: '오늘의 타임라인',
    add: '추가',
    entries: [
      {
        time: '08:30~09:00',
        title: '출근길',
        place: '강남역 → 성수역 · 7호선',
        note: '7호선이 평소보다 많이 붐볐다.',
        photos: true,
      },
      {
        time: '12:30~13:30',
        title: '성수동 · 작은 카페',
        place: '',
        note: '오랜만에 만난 고등학교 친구와 딸기라떼를 마셨다.',
        photos: false,
      },
    ],
  },
};

const en: SiteCopy = {
  meta: {
    title: 'Laimory — the AI that remembers your life',
    description:
      'Laimory gathers your photos, calendar, places and activity into a timeline of the day, and drafts the journal entry before you even open the app.',
  },

  nav: {
    how: 'How it works',
    sources: 'Sources',
    control: 'Your control',
    download: 'Download',
  },

  hero: {
    eyebrow: 'LIFE + AI + MEMORY',
    titleLine1: 'Everything you did today,',
    titleLine2: 'laid out at a glance',
    body: 'Laimory gathers your photos and calendar, the places you passed through and the moving you did, builds a timeline of the day, and drafts the journal entry in advance.',
    ctaPrimary: 'Download the app',
    ctaSecondary: 'See how it works',
    metaSources: 'Photos · Calendar · Places · Activity',
    metaConsent: 'Only what you allow',
  },

  moments: {
    title: 'What did you do last week?',
    body: 'Days go by fast. The moments that mattered and the ones that wore you out are moments you will want back someday. But recalling a day from scratch, at the end of it, is harder than it sounds.',
    imageAlt: 'A moment from the day',
  },

  how: {
    eyebrow: 'HOW IT WORKS',
    title: 'Three steps and the day stays with you',
    steps: [
      {
        title: 'We gather',
        body: 'Photos, calendar, places and activity, only as much as you allow. Nothing for you to write down.',
      },
      {
        title: 'We arrange',
        body: 'Scattered pieces become a timeline in order, and AI drafts the journal entry for you.',
      },
      {
        title: 'You refine',
        body: 'Keep what you like and fix the rest. The mood of the day takes a single tap.',
      },
    ],
  },

  sources: {
    titleLine1: 'We read your day from',
    titleLine2: 'what is already there',
    body: 'Nothing new to record. Laimory reads the calendar you already use and the photos you already took.',
    items: [
      { title: 'Photos', body: 'With the time and place they were taken' },
      { title: 'Calendar', body: 'Your existing schedule, just as it is' },
      { title: 'Places', body: 'Gangnam → Seongsu · Line 7' },
      { title: 'Activity', body: 'Steps and movement fill in the day' },
    ],
  },

  control: {
    eyebrow: 'CONTROL',
    title: 'The record is always yours',
    body: 'What the AI writes is only a draft. Fix what it got wrong, and decide for yourself what stays.',
    aiLabel: 'ARRANGED BY AI',
    aiText: 'Team meeting in Seongsu',
    myLabel: 'A LINE I ADDED',
    myText: 'Good to see everyone again after so long.',
  },

  mood: {
    question: 'How was your day?',
    joy: 'Upbeat',
    calm: 'Calm',
    mellow: 'Neutral',
    weary: 'Worn out',
    down: 'Low',
  },

  footer: {
    tagline: 'You do not have to try to remember. The day stays anyway.',
    cta: 'Download the app',
    credit: 'Team 369 · Laimory',
  },

  app: {
    time: '9:30',
    date: 'Thursday, May 8',
    aiTitle: 'AI has arranged your day',
    aiBody: 'Keep what you like and refine the rest.',
    moodTitle: 'How was your day?',
    moodBody: 'Pick the feeling that comes closest.',
    timelineLabel: 'Today’s timeline',
    add: 'Add',
    entries: [
      {
        time: '08:30–09:00',
        title: 'Commute',
        place: 'Gangnam → Seongsu · Line 7',
        note: 'Line 7 was more packed than usual.',
        photos: true,
      },
      {
        time: '12:30–13:30',
        title: 'Seongsu · a small café',
        place: '',
        note: 'Had a strawberry latte with a friend from high school.',
        photos: false,
      },
    ],
  },
};

export const copy = { ko, en } as const;

export type Lang = keyof typeof copy;
