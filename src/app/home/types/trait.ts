// Trait 관련 공통 타입 정의

// 기본 Trait 키 타입
export const TRAIT_KEYS = ['aboutMe', 'projects', 'techStack'] as const;
export type TraitKey = (typeof TRAIT_KEYS)[number];

// 각 trait별 탭 키 매핑
export const TRAIT_TAB_KEYS = {
  aboutMe: ['introduction', 'recentActivities', 'career'],
  projects: ['blast', 'toyProjects'],
  techStack: ['coreTech', 'experiencedTech', 'collaborationTools'],
} as const;

// 탭 키 타입 정의
export type TraitTabKeys = typeof TRAIT_TAB_KEYS;
export type TabKey<T extends TraitKey> = TraitTabKeys[T][number];

// Translation 관련 인터페이스
export interface TraitTranslationKeys {
  title: string;
  tabs?: string[];
  tabContents?: {
    [key: string]: {
      sections: Array<{
        title: string;
        position?: string;
        content: string;
        detail?: Array<{
          title: string;
          content: string;
        }>;
      }>;
      contact?: {
        email: string;
        github: string;
        blog: string;
      };
    };
  };
}

// Contact 정보 타입
export interface ContactInfo {
  email: string;
  github: string;
  blog: string;
  resume: string;
}

// Tab Content 데이터 타입
export interface TabContentData {
  sections: Array<{
    title: string;
    position?: string;
    content: string;
    detail?: Array<{ title: string; content: string }>;
  }>;
  contact?: ContactInfo;
}

