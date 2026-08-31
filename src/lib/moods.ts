/** Laimory가 쓰는 다섯 가지 감정. */
export type Emotion = 'joy' | 'calm' | 'mellow' | 'weary' | 'down';

/** 감정별 입 모양. 원본 디자인의 26 x 26 좌표계를 그대로 씁니다. */
export const moodMouths: Record<Emotion, string> = {
  joy: 'M8 14.5 L13 16.9 L18 14.5',
  calm: 'M9 15 L13 16.5 L17 15',
  mellow: 'M9.5 16.75 L16.5 16.75',
  weary: 'M9.5 16.75 L16.5 16.75',
  down: 'M9.5 16.9 L13 15.3 L16.5 16.9',
};

export const moodColors: Record<Emotion, string> = {
  joy: 'var(--lm-joy)',
  calm: 'var(--lm-calm)',
  mellow: 'var(--lm-mellow)',
  weary: 'var(--lm-weary)',
  down: 'var(--lm-down)',
};

/** 화면에 늘어놓는 순서 */
export const moodOrder: Emotion[] = ['joy', 'calm', 'mellow', 'weary', 'down'];
