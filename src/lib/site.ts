/**
 * 사이트 절대 주소를 다루는 공통 헬퍼.
 *
 * astro.config.mjs의 site가 정답이고, 여기서 하드코딩하지 않습니다.
 * site가 비어 있는 경우(설정 누락)에는 빌드를 실패시켜 잘못된 도메인이
 * 조용히 배포되는 것을 막습니다.
 */

/** 엔드포인트·레이아웃에서 넘겨받은 site를 검증해 돌려줍니다. */
export function SITE_ORIGIN(site: URL | undefined): URL {
  if (!site) {
    throw new Error(
      'astro.config.mjs에 site가 설정되어 있지 않습니다. ' +
        'canonical · sitemap · robots가 모두 이 값을 기준으로 만들어지므로 반드시 필요합니다.'
    );
  }
  return site;
}

/** 사이트 기준 절대 URL 문자열을 만듭니다. */
export function absolute(site: URL | undefined, path: string): string {
  return new URL(path, SITE_ORIGIN(site)).href;
}
