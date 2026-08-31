import { copy, defaultLang, type Lang, type SiteCopy } from './ui';

/** URL 경로에서 현재 언어를 추출합니다. (예: /en/ → 'en') */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in copy) return segment as Lang;
  return defaultLang;
}

/** 현재 언어의 문구 묶음을 돌려줍니다. */
export function useCopy(lang: Lang): SiteCopy {
  return copy[lang];
}

/** 같은 페이지의 다른 언어 경로를 만들어 줍니다. (현재는 홈만 존재) */
export function getLocalizedHome(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
