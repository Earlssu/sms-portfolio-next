import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectData } from '@/app/career/types/projectData';

interface ProjectInsightsProps {
  details: ProjectData['details'];
}

const ProjectInsights: React.FC<ProjectInsightsProps> = ({ details }) => {
  const { t } = useTranslation();
  
  if (!details) return null;

  const insights = [
    {
      key: 'problem',
      title: `🚨 ${t('carousel.modal.problem')}`,
      content: details.problem,
    },
    {
      key: 'solution',
      title: `💡 ${t('carousel.modal.solution')}`,
      content: details.solution,
    },
    {
      key: 'impact',
      title: `📈 ${t('carousel.modal.impact')}`,
      content: details.impact,
    },
  ];

  const validInsights = insights.filter(insight => insight.content);

  if (validInsights.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-3">
        💡 {t('carousel.modal.projectInsights')}
      </h3>
      <div className="flex flex-col gap-4">
        {validInsights.map((insight) => (
          <div
            key={insight.key}
            className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg transition-transform duration-200 hover:scale-[1.02]"
          >
            <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-1.5">
              {insight.title}
            </h4>
            <p className="text-sm leading-relaxed text-white/70">
              {insight.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectInsights;
