"use client";
import { useTranslation } from "react-i18next";

interface SkillDescriptionProps {
  skill: string;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({ skill }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className={"text-lg font-bold text-amber-400"}>
        {skill.toUpperCase()}
      </h3>
      <p>{t(skill)}</p>
    </div>
  );
};

export default SkillDescription;
