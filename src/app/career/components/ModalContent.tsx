import React from 'react';
import { ProjectData } from '@/app/career/types/projectData';

interface ModalContentProps {
  projectData: ProjectData;
}

const ModalContent: React.FC<ModalContentProps> = ({ projectData }) => {
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
              👨‍💻 담당 역할
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {projectData.role}
            </p>
          </div>
        )}

        {projectData.team && (
          <div className={'flex-1'}>
            <h3 className="text-lg font-semibold text-white mb-3">👥 팀</h3>
            <p className="text-sm leading-relaxed text-white/80">
              {projectData.team}
            </p>
          </div>
        )}

        {projectData.teamSize && (
          <div className={'flex-1'}>
            <h3 className="text-lg font-semibold text-white mb-3">
              📊 팀 구성
            </h3>
            <p className="inline-flex items-center text-sm leading-relaxed text-white/80">
              {projectData.teamSize}
            </p>
          </div>
        )}

        {projectData.links &&
          projectData.links.map((link, index) => {
            return (
              <div
                key={`${projectData.title}_link_${index}`}
                className={'w-full mt-4 mb-2'}
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  🔗 관련 링크
                </h3>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-blue-600 hover:border-blue-400 hover:bg-white hover:text-black text-white rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {link.title}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ModalContent;
