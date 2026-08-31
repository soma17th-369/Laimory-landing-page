/**
 * 바깥으로 나가는 링크를 한곳에 모아 둡니다.
 *
 * 앱 스토어 주소가 나오면 DOWNLOAD_URL만 실제 주소로 바꾸면
 * 헤더 · 히어로 · 푸터의 '앱 다운로드' 버튼이 모두 함께 바뀝니다.
 * 지금은 주소가 없어 푸터의 다운로드 영역으로 스크롤만 시킵니다.
 */
export const DOWNLOAD_URL = '#download';

/** 외부 주소로 바뀌면 새 탭으로 열도록 속성을 함께 넘깁니다. */
export const isExternal = (href: string) => /^https?:\/\//.test(href);
