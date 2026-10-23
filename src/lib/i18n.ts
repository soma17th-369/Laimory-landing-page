/**
 * 한국어(기본) / 영어 두 언어.
 * - 한국어: /     (기본 언어라 접두어 없음)
 * - 영어:  /en/
 * 언어 목록은 astro.config.mjs의 i18n.locales와 같게 맞춥니다.
 */
import { copies, type SiteCopy } from './copy';

export type Lang = keyof typeof copies;

export const DEFAULT_LANG: Lang = 'ko';

/** 언어별 홈 주소, 언어 전환 버튼 표시, og:locale 값 */
export const LANGUAGES: Record<Lang, { home: string; name: string; short: string; ogLocale: string }> = {
  ko: { home: '/', name: '한국어', short: 'KO', ogLocale: 'ko_KR' },
  en: { home: '/en/', name: 'English', short: 'EN', ogLocale: 'en_US' },
};

/** Astro.currentLocale을 언어로 바꿉니다. 언어 구분이 없는 페이지(404 등)는 기본 언어입니다. */
export function getLang(locale: string | undefined): Lang {
  return locale && locale in copies ? (locale as Lang) : DEFAULT_LANG;
}

/** 현재 언어의 문구 묶음을 돌려줍니다. 컴포넌트에서 useCopy(Astro.currentLocale)로 씁니다. */
export function useCopy(locale: string | undefined): SiteCopy {
  return copies[getLang(locale)];
}
