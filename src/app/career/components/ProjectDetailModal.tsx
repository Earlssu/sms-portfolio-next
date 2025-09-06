'use client';

import React, { useEffect } from 'react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: {
    title: string;
    subtitle?: string;
    num: string;
    imageSrc: string;
    period?: string;
    type?: string;
    description?: string;
    role?: string;
    team?: string;
    technologies?: string[];
    achievements?: string[];
    details?: {
      problem?: string;
      solution?: string;
      impact?: string;
    };
  } | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !projectData) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/85 flex items-center justify-center z-[100] backdrop-blur-md animate-in fade-in duration-400"
      onClick={onClose}
    >
      <div
        className="relative w-[95vw] md:w-[90vw] max-w-4xl h-[90vh] md:h-[85vh] max-h-[800px] bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-in zoom-in-95 slide-in-from-bottom-8 duration-500"
        onClick={(e) => e.stopPropagation()} // 카드 클릭 시 모달 닫힘 방지
      >
        {/* 배경 이미지 */}
        <div className="relative w-full h-1/2 overflow-hidden">
          <img
            src={projectData.imageSrc}
            alt={projectData.title}
            className="w-full h-full object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
        </div>

        {/* 닫기 버튼 */}
        <button 
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 text-white text-lg backdrop-blur-lg transition-all duration-200 hover:bg-black/80 hover:scale-110 z-10"
          onClick={onClose}
        >
          ✕
        </button>

        {/* 프로젝트 번호 */}
        <div className="absolute top-5 left-5 text-white text-2xl md:text-3xl font-bold drop-shadow-lg z-10 opacity-90">
          {projectData.num}
        </div>

        {/* 콘텐츠 영역 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 p-5 md:p-8 text-white overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          <div className="mb-5">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
              {projectData.title}
            </h1>
            {projectData.subtitle && (
              <p className="text-base text-white/60 mb-2 italic">
                {projectData.subtitle}
              </p>
            )}
            {projectData.type && (
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-xl text-xs text-blue-200 mb-1">
                {projectData.type}
              </div>
            )}
          </div>

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

          {projectData.technologies && projectData.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                🛠️ 사용 기술
              </h3>
              <div className="flex flex-wrap gap-2">
                {projectData.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-2xl text-xs text-white/90 backdrop-blur-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {projectData.achievements && projectData.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                🏆 주요 성과
              </h3>
              <ul className="space-y-3">
                {projectData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white/60 font-bold mt-1.5 text-sm">•</span>
                    <span className="text-sm leading-relaxed text-white/80 flex-1 pt-1">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {projectData.details && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                💡 프로젝트 인사이트
              </h3>
              <div className="flex flex-col gap-4">
                {projectData.details.problem && (
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg">
                    <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-1.5">
                      🚨 문제점
                    </h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      {projectData.details.problem}
                    </p>
                  </div>
                )}
                {projectData.details.solution && (
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg">
                    <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-1.5">
                      💡 해결방안
                    </h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      {projectData.details.solution}
                    </p>
                  </div>
                )}
                {projectData.details.impact && (
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg">
                    <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-1.5">
                      📈 임팩트
                    </h4>
                    <p className="text-sm leading-relaxed text-white/70">
                      {projectData.details.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
