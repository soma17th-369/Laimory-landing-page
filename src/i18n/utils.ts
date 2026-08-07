import { ui, defaultLang } from './ui';

/** URL 경로에서 현재 언어를 추출합니다. (예: /en/ → 'en') */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/** 현재 언어에 맞는 번역 함수 t()를 돌려줍니다. */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/** 같은 페이지의 다른 언어 경로를 만들어 줍니다. (현재는 홈만 존재) */
export function getLocalizedHome(lang: keyof typeof ui) {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
