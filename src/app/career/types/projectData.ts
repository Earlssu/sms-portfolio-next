export interface ProjectData {
  id: string;
  title: string;
  subtitle?: string;
  num: string;
  imageSrc: string;
  period?: string;
  type?: string;
  description?: string;
  role?: string;
  team?: string;
  technologies?: string[];
  achievements?: string[];
  details?: {
    problem?: string;
    solution?: string;
    impact?: string;
  };
}
