// 프로젝트 상세 정보 타입
export interface ProjectDetails {
  problem?: string;
  solution?: string;
  impact?: string;
}

// 기본 캐러셀 아이템 타입 (Career 페이지용)
export interface CarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  num: string;
  imageSrc: string;
}

// 프로젝트 전체 데이터 타입 (Career 페이지용)
export interface ProjectData extends CarouselItem {
  period?: string;
  type?: string;
  description?: string;
  role?: string;
  team?: string;
  technologies?: string[];
  achievements?: string[];
  details?: ProjectDetails;
}
