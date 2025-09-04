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

// 각 trait별 탭 키 매핑
export const TRAIT_TAB_KEYS = {
  aboutMe: ['introduction', 'recentActivities', 'career'],
  projects: ['overview', 'keyProjects', 'achievements'],
  techStack: ['coreTech', 'experiencedTech', 'collaborationTools'],
} as const;

// 탭 콘텐츠 전용 키 생성 함수 (의미있는 키 이름 사용)
export const getTraitTabContentKey = (
  traitKey: TraitKey,
  tabIndex: number
) => {
  const tabKeys = TRAIT_TAB_KEYS[traitKey];
  const tabKey = tabKeys[tabIndex];
  return `traits.${traitKey}.tabContents.${tabKey}`;
};
