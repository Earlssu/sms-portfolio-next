import { detectLanguage } from "@/shared/utils/languageUtils";
import { createGenerateMetadata } from "@/shared/utils/metadataUtils";
import { generateSkillsMetadata } from "./metadata";
import SkillsClient from "@/app/skills/SkillsClient";

// 모듈화된 generateMetadata 함수 사용
export const generateMetadata = createGenerateMetadata(generateSkillsMetadata);

// 예시: searchParams를 받아 다국어 지원 (추후 확장용)
interface SkillsProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Skills: React.FC<SkillsProps> = ({ searchParams }) => {
  // 새로운 유틸리티 활용 예시 (현재는 기본값 사용)
  const lang = detectLanguage(searchParams);
  
  return <SkillsClient lang={lang} />;
};

export default Skills;
