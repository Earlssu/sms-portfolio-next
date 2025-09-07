'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ProjectData } from '@/app/career/types/projectData';
import 'animate.css';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: ProjectData | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 스크롤 진행률 계산
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      const totalScrollable = scrollHeight - clientHeight;
      const progress =
        totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    }
  };

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
      className="fixed inset-0 bg-black/85 flex items-center justify-center z-[100] backdrop-blur-md animate__animated animate__fadeIn"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
    >
      <div
        className="relative w-[95vw] md:w-[90vw] max-w-4xl h-[90vh] md:h-[85vh] max-h-[800px] bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate__animated animate__zoomIn"
        style={{ animationDuration: '0.4s', animationDelay: '0.1s' }}
        onClick={(e) => e.stopPropagation()} // 카드 클릭 시 모달 닫힘 방지
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 text-white text-lg backdrop-blur-lg transition-all duration-200 hover:bg-black/80 hover:scale-110 z-20"
          onClick={onClose}
        >
          ✕
        </button>

        {/* 커스텀 스크롤 인디케이터 */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
          <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-blue-400 to-blue-600 transition-all duration-300 ease-out rounded-full"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* 스크롤 가능한 전체 콘텐츠 */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="modal-scroll-container w-full h-full overflow-y-auto animate__animated animate__fadeIn"
          style={{
            animationDuration: '0.5s',
            animationDelay: '0.3s',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* 배경 이미지 */}
          <div className="relative w-full h-[50vh] overflow-hidden">
            <img
              src={projectData.imageSrc}
              alt={projectData.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />

            {/* 프로젝트 번호 - 이미지 위에 고정 */}
            <div className="absolute top-5 left-5 text-white text-2xl md:text-3xl font-bold drop-shadow-lg z-10">
              {projectData.num}
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="w-full bg-gray-900 p-5 md:p-8 text-white">
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
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-xl text-xs text-blue-200 mb-1 -ml-2">
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

            {projectData.technologies &&
              projectData.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🛠️ 사용 기술
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-2xl text-xs text-white/90 backdrop-blur-lg transition-transform duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {projectData.achievements &&
              projectData.achievements.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    🏆 주요 성과
                  </h3>
                  <ul className="space-y-3">
                    {projectData.achievements.map((achievement, index) => (
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
              )}

            {projectData.details && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  💡 프로젝트 인사이트
                </h3>
                <div className="flex flex-col gap-4">
                  {projectData.details.problem && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg transition-transform duration-200 hover:scale-[1.02]">
                      <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-1.5">
                        🚨 문제점
                      </h4>
                      <p className="text-sm leading-relaxed text-white/70">
                        {projectData.details.problem}
                      </p>
                    </div>
                  )}
                  {projectData.details.solution && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg transition-transform duration-200 hover:scale-[1.02]">
                      <h4 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-1.5">
                        💡 해결방안
                      </h4>
                      <p className="text-sm leading-relaxed text-white/70">
                        {projectData.details.solution}
                      </p>
                    </div>
                  )}
                  {projectData.details.impact && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg transition-transform duration-200 hover:scale-[1.02]">
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
    </div>
  );
};

export default ProjectDetailModal;
