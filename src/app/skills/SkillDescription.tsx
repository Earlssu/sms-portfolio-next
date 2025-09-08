"use client";
import { useTranslation } from "react-i18next";

interface SkillDescriptionProps {
  skill: string;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({ skill }) => {
  const { t } = useTranslation();

  return (
    <div className="group p-3 sm:p-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]">
      <h3 className="text-base sm:text-lg font-bold text-blue-300 mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-200">
        {skill.toUpperCase()}
      </h3>
      <p className="text-xs sm:text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-200">
        {t(`skills.descriptions.${skill}`)}
      </p>
    </div>
  );
};

export default SkillDescription;
