'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react';
import { ProjectData } from '@/app/career/types/projectData';
import 'animate.css';
import ScrollIndicator from '@/app/career/components/ScrollIndicator';
import ModalHeader from '@/app/career/components/ModalHeader';
import ModalContent from '@/app/career/components/ModalContent';
import TechStack from '@/app/career/components/TechStack';
import Achievements from '@/app/career/components/Achievements';
import ProjectInsights from '@/app/career/components/ProjectInsights';
import CatModalContent from '@/app/career/components/CatModalContent';

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
        <ScrollIndicator scrollProgress={scrollProgress} />

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
          <div className="w-full bg-gray-900 p-5 md:p-8 text-white flex flex-col gap-4">
            {projectData.id === 'hidden-cats' ? (
              <CatModalContent projectData={projectData} />
            ) : (
              <Fragment>
                <ModalHeader projectData={projectData} />
                <ModalContent projectData={projectData} />
                <TechStack technologies={projectData.technologies || []} />
                <Achievements achievements={projectData.achievements || []} />
                <ProjectInsights details={projectData.details} />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
