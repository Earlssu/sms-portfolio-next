export const TRAIT_KEYS = [
  'student',
  'collaborator',
  'positive',
  'learner',
] as const;

export type TraitKey = (typeof TRAIT_KEYS)[number];

export interface TraitTranslationKeys {
  title: string;
  detail: string;
  skills: string[];
}

// useTranslation에서 사용할 키 패턴 생성 함수
export const getTraitTranslationKey = (
  traitKey: TraitKey,
  field: keyof TraitTranslationKeys
) => {
  return `traits.${traitKey}.${field}`;
};
