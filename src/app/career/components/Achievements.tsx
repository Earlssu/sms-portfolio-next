import React from 'react';
import { useTranslation } from 'react-i18next';

interface AchievementsProps {
  achievements: string[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const { t } = useTranslation();
  
  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">
        🏆 {t('carousel.modal.achievements')}
      </h3>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-white/60 font-bold mt-1.5 text-sm">
              •
            </span>
            <span className="text-sm leading-relaxed text-white/80 flex-1 pt-1">
              {achievement}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
