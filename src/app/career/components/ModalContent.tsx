import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectData } from '@/app/career/types/projectData';

interface ModalContentProps {
  projectData: ProjectData;
}

const ModalContent: React.FC<ModalContentProps> = ({ projectData }) => {
  const { t } = useTranslation();

  return (
    <div>
      {projectData.period && (
        <div className="text-sm font-medium text-white/80 mb-5">
          📅 {projectData.period}
        </div>
      )}

      {projectData.description && (
        <p className="text-base leading-relaxed text-white/90 mb-6">
          {projectData.description}
        </p>
      )}

      <div className="flex flex-wrap">
        {projectData.role && (
          <div className={'flex-1'}>
            <h3 className="text-lg font-semibold text-white mb-3">
              👨‍💻 {t('carousel.modal.role')}
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {projectData.role}
            </p>
          </div>
        )}

        {projectData.team && (
          <div className={'flex-1'}>
            <h3 className="text-lg font-semibold text-white mb-3">
              👥 {t('carousel.modal.team')}
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {projectData.team}
            </p>
          </div>
        )}

        {projectData.teamSize && (
          <div className={'flex-1'}>
            <h3 className="text-lg font-semibold text-white mb-3">
              📊 {t('carousel.modal.teamSize')}
            </h3>
            <p className="inline-flex items-center text-sm leading-relaxed text-white/80">
              {projectData.teamSize}
            </p>
          </div>
        )}

        {projectData.links && (
          <div className={'w-full mt-4 mb-2'}>
            <h3 className="text-lg font-semibold text-white mb-3">
              🔗 {t('carousel.modal.links')}
            </h3>
            <div className={'flex flex-wrap gap-2'}>
              {projectData.links.map((link, index) => {
                return (
                  <a
                    key={`${projectData.title}_link_${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 hover:border-blue-400 hover:bg-white hover:text-black text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
