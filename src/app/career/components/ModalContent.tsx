import React from 'react';
import { ProjectData } from '@/app/career/types/projectData';

interface ModalContentProps {
  projectData: ProjectData;
}

const ModalContent: React.FC<ModalContentProps> = ({ projectData }) => {
  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {projectData.role && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              👨‍💻 담당 역할
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {projectData.role}
            </p>
          </div>
        )}

        {projectData.team && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              👥 팀
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              {projectData.team}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalContent;
