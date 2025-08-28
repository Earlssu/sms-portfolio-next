import SkillDescription from "@/app/skills/SkillDescription";
import { Fragment } from "react";
import { detectLanguage } from "@/shared/utils/languageUtils";
import { getTechTranslation } from "@/shared/utils/translationUtils";
import { createGenerateMetadata } from "@/shared/utils/metadataUtils";
import { generateSkillsMetadata } from "./metadata";

// 모듈화된 generateMetadata 함수 사용
export const generateMetadata = createGenerateMetadata(generateSkillsMetadata);

// 예시: searchParams를 받아 다국어 지원 (추후 확장용)
interface SkillsProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Skills: React.FC<SkillsProps> = ({ searchParams }) => {
  // 새로운 유틸리티 활용 예시 (현재는 기본값 사용)
  const lang = detectLanguage(searchParams);
  
  return (
    <Fragment>
      <div className={"flex flex-1 flex-col gap-4"}>
        <h2 className={"text-2xl font-bold mt-4"}>
          {lang === 'en' ? 'Frontend' : '프론트엔드'}
        </h2>
        <SkillDescription skill={"html5"} />
        <SkillDescription skill={"css3"} />
        <SkillDescription skill={"javascript"} />
        <SkillDescription skill={"react"} />
        <SkillDescription skill={"reactNative"} />
        <SkillDescription skill={"typescript"} />
        <SkillDescription skill={"nextJS"} />
        <SkillDescription skill={"zustand"} />
        <SkillDescription skill={"mobx"} />
        <SkillDescription skill={"redux"} />
        <SkillDescription skill={"styledComponent"} />
        <SkillDescription skill={"tailwind"} />
        <SkillDescription skill={"reactQuery"} />
      </div>
      <div>
        <h2 className={"text-2xl font-bold mb-4"}>
          {lang === 'en' ? 'Communication' : '협업 도구'}
        </h2>
        <SkillDescription skill={"git"} />
        <SkillDescription skill={"github"} />
        <SkillDescription skill={"githubActions"} />
        <SkillDescription skill={"vercel"} />
        <SkillDescription skill={"figma"} />
        <SkillDescription skill={"notion"} />
        <SkillDescription skill={"jira"} />
        <SkillDescription skill={"slack"} />
      </div>
    </Fragment>
  );
};

export default Skills;
