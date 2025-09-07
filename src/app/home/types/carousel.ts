// 공통 연락처 정보 타입
export interface ContactInfo {
  email: string;
  github: string;
  blog: string;
  resume: string;
}

// 활동 정보 타입
export interface ActivityInfo {
  icon: string;
  title: string;
  period: string;
  description: string;
}

// 경력 정보 타입
export interface ExperienceInfo {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

// 기능/특징 정보 타입
export interface FeatureInfo {
  title: string;
  content: string;
}

// 캐러셀 슬라이드 데이터 타입 (About Me 섹션용)
export interface CarouselSlideData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  highlight?: string;
  closing?: string;
  features?: FeatureInfo[];
  activities?: ActivityInfo[];
  experiences?: ExperienceInfo[];
  contact?: ContactInfo;
}

// 각 컴포넌트의 Props 타입은 해당 컴포넌트 파일에서 정의합니다.
// 여기서는 공통으로 사용되는 데이터 타입들만 export합니다.
