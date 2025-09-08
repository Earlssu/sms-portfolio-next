import React from 'react';

interface AchievementsProps {
  achievements: string[];
}

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">
        🏆 주요 성과
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
