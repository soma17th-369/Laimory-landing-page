/**
 * 화면에 보이는 모든 문구는 이 파일에서 관리합니다.
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
          { term: '수집 목적', desc: '라이모리 출시 알림 문자 발송, 광고 유입 경로 분석' },
          {
            term: '수집 항목',
            desc: '휴대전화번호, 광고를 통해 들어온 경우 유입 경로(광고 캠페인·소재 정보). 신청 일시와 동의 내용은 자동으로 기록',
          },
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
          {
            term: '이전 항목',
            desc: '휴대전화번호, 유입 경로(광고 캠페인·소재 정보), 신청 일시, 동의 내용',
          },
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
