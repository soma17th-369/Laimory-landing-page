import type { IconName } from './icons';

/** 아이콘 배지 색. 값은 global.css의 --lm-badge-* 토큰과 짝을 이룹니다. */
export type Tone = 'joy' | 'calm' | 'green' | 'purple';

/**
 * 데이터 소스 4종(사진 · 캘린더 · 위치 · 알림)의 아이콘과 배지 색.
 * 문구는 i18n(ui.ts)의 result.sources / privacy.screen.items에 있고,
 * 배열 순서가 서로 맞아야 합니다.
 */
export const sourceLooks: { icon: IconName; tone: Tone }[] = [
  { icon: 'camera', tone: 'joy' },
  { icon: 'calendar', tone: 'calm' },
  { icon: 'pin', tone: 'green' },
  { icon: 'chatsCircle', tone: 'purple' },
];
