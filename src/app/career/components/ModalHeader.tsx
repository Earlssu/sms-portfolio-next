import React from 'react';
import { ProjectData } from '@/app/career/types/projectData';

interface ModalHeaderProps {
  projectData: ProjectData;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ projectData }) => {
  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
        {projectData.title}
      </h1>
      {projectData.subtitle && (
        <p className="text-base text-white/60 mb-2 italic">
          {projectData.subtitle}
        </p>
      )}
      {projectData.type && (
        <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-xl text-xs text-blue-200 mb-1 -ml-2">
          {projectData.type}
        </div>
      )}
    </div>
  );
};

export default ModalHeader;
