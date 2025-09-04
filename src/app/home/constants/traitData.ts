export const TRAIT_KEYS = [
  'aboutMe',
  'projects',
  'techStack',
] as const;

export type TraitKey = (typeof TRAIT_KEYS)[number];

export interface TraitTranslationKeys {
  title: string;
  detail: string;
  tabs?: string[];
  skills?: string[];
  tabContents?: {
    [key: string]: {
      sections: Array<{
        title: string;
        content: string;
      }>;
      contact?: {
        email: string;
        github: string;
        blog: string;
      };
    };
  };
}

// useTranslation에서 사용할 키 패턴 생성 함수
export const getTraitTranslationKey = (
  traitKey: TraitKey,
  field: keyof TraitTranslationKeys
) => {
  return `traits.${traitKey}.${field}`;
};

// 탭 콘텐츠 전용 키 생성 함수
export const getTraitTabContentKey = (
  traitKey: TraitKey,
  tabIndex: number
) => {
  return `traits.${traitKey}.tabContents.${tabIndex}`;
};
