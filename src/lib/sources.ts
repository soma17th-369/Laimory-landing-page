import type { IconName } from './icons';

/** 아이콘 배지 색. 값은 tokens.css의 --lm-badge-* 토큰과 짝을 이룹니다. */
export type Tone = 'joy' | 'calm' | 'green' | 'purple';

/** 기록 데모(Result 섹션)에서 모아 오는 기록 세 가지. */
export type SourceKey = 'calendar' | 'photo' | 'place';

/**
 * 기록 종류별 아이콘과 배지 색.
 * 왼쪽 기록 카드와 오른쪽 타임라인의 '어디서 왔는지' 표시가 같은 색을 써서
 * 어느 기록이 어느 순간이 됐는지 이어 보이게 합니다.
 * 문구는 lib/copy.ts의 result에 있습니다.
 */
export const sourceLooks: Record<SourceKey, { icon: IconName; tone: Tone }> = {
  calendar: { icon: 'calendar', tone: 'calm' },
  photo: { icon: 'camera', tone: 'joy' },
  place: { icon: 'pin', tone: 'green' },
};
