import { absolute } from './site';
import type { Lang } from '../i18n/ui';

/**
 * 검색엔진에 넘길 구조화 데이터(JSON-LD).
 *
 * 넣지 않은 것들과 그 이유:
 * - aggregateRating / offers / 다운로드 수
 *   근거 없는 값을 넣으면 구글 스팸 정책 위반이고 수동 조치 대상입니다.
 *   실제 지표가 생기기 전까지 넣지 않습니다.
 * - operatingSystem / downloadUrl
 *   앱이 아직 스토어에 없습니다. 출시되면 src/lib/links.ts의 DOWNLOAD_URL과
 *   함께 채우세요.
 * - Organization.logo
 *   구글이 권장하는 래스터 로고 파일이 아직 없습니다. OG 이미지를 만들 때
 *   (이슈 #6) 같이 추가하면 됩니다.
 */
export function buildSchema(site: URL | undefined, lang: Lang, description: string) {
  const home = absolute(site, lang === 'ko' ? '/' : '/en/');
  const root = absolute(site, '/');

  // @id로 서로를 참조해 같은 실체라는 것을 알려 줍니다.
  const organizationId = `${root}#organization`;
  const websiteId = `${root}#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Laimory',
        url: root,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: root,
        name: 'Laimory',
        inLanguage: lang === 'ko' ? 'ko-KR' : 'en',
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Laimory',
        applicationCategory: 'LifestyleApplication',
        description,
        url: home,
        publisher: { '@id': organizationId },
      },
    ],
  };
}
