export const SCROLL_CONFIG = {
  HERO_ACTIVATION_THRESHOLD: 0.8, // 히어로 섹션 80% 지나면 카드 활성화
  TYPING_SPEEDS: {
    HERO: 75,
    DESCRIPTION: 50,
  },
  DELAYS: {
    DESCRIPTION: 2, // 2초 후 설명 타이핑 시작
  },
} as const;
