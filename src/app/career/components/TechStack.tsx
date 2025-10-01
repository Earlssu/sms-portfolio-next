import React from 'react';
import { useTranslation } from 'react-i18next';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  const { t } = useTranslation();
  
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">
        🛠️ {t('carousel.modal.techStack')}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-2xl text-xs text-white/90 backdrop-blur-lg transition-transform duration-200 hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
