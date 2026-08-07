// 화면에 노출되는 모든 문구는 여기서 관리합니다.
// 새 언어를 추가하려면 ui 객체에 키를 하나 더 넣고
// astro.config.mjs의 locales 배열에도 추가하세요.

export const languages = {
  ko: '한국어',
  en: 'English',
} as const;

export const defaultLang = 'ko';

export const ui = {
  ko: {
    'nav.features': '기능',
    'nav.cta': '시작하기',

    'hero.badge': '✨ Laimory 소개',
    'hero.title': '당신의 아이디어를 현실로, Laimory',
    'hero.subtitle':
      '여기에 Laimory가 무엇인지 한 문장으로 설명하세요. 핵심 가치를 명확하게 전달하는 것이 가장 중요합니다.',
    'hero.cta_primary': '무료로 시작하기',
    'hero.cta_secondary': '더 알아보기',

    'features.title': '왜 Laimory인가요?',
    'features.subtitle': 'Laimory가 제공하는 핵심 가치를 소개합니다.',
    'feature.1.title': '빠른 속도',
    'feature.1.desc': '핵심 기능 1에 대한 설명을 여기에 작성하세요.',
    'feature.2.title': '간편한 사용',
    'feature.2.desc': '핵심 기능 2에 대한 설명을 여기에 작성하세요.',
    'feature.3.title': '안전한 보안',
    'feature.3.desc': '핵심 기능 3에 대한 설명을 여기에 작성하세요.',

    'cta.title': '지금 바로 Laimory를 시작하세요',
    'cta.subtitle': '몇 분이면 충분합니다. 지금 시작해보세요.',
    'cta.button': '시작하기',

    'footer.rights': '모든 권리 보유.',
  },
  en: {
    'nav.features': 'Features',
    'nav.cta': 'Get started',

    'hero.badge': '✨ Introducing Laimory',
    'hero.title': 'Turn your ideas into reality with Laimory',
    'hero.subtitle':
      'Describe what Laimory is in one sentence here. Communicating your core value clearly is what matters most.',
    'hero.cta_primary': 'Start for free',
    'hero.cta_secondary': 'Learn more',

    'features.title': 'Why Laimory?',
    'features.subtitle': 'Here are the core values Laimory delivers.',
    'feature.1.title': 'Blazing fast',
    'feature.1.desc': 'Write the description for core feature 1 here.',
    'feature.2.title': 'Easy to use',
    'feature.2.desc': 'Write the description for core feature 2 here.',
    'feature.3.title': 'Secure by design',
    'feature.3.desc': 'Write the description for core feature 3 here.',

    'cta.title': 'Get started with Laimory today',
    'cta.subtitle': 'It only takes a few minutes. Try it now.',
    'cta.button': 'Get started',

    'footer.rights': 'All rights reserved.',
  },
} as const;
