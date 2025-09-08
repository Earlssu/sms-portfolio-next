'use client';

import React, { Fragment, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import CarouselCard from '@/app/career/components/CarouselCard';
import ProjectDetailModal from '@/app/career/components/ProjectDetailModal';
import carouselItems from '@/app/career/constants/carouselItems';
import { ProjectData } from '@/app/career/types/projectData';

const CustomCarousel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );
  
  // 터치/드래그 상태
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // translation.json에서 career 프로젝트 데이터 가져오기
  const careerProjects = t('career.projects', {
    returnObjects: true,
  }) as ProjectData[];

  const changeIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // 고양이 카드 (숨겨진 카드) 클릭 처리
      if (index === carouselItems.length) {
        const catModalData: ProjectData = {
          id: 'hidden-cats',
          title: '🐈 숨겨진 고양이들',
          subtitle: 'Hidden Cats',
          num: '🐾',
          imageSrc: '/carousel-hidden-00.jpg',
          category: 'Secret Project',
          period: '2024 ~ 현재',
          type: '힐링 프로젝트',
          description:
            '개발하다 지칠 때마다 위로가 되어주는 우리 집 고양이들입니다.',
          role: '집사',
          team: '설기 & 우유',
        };
        setSelectedProject(catModalData);
        setIsModalOpen(true);
        return;
      }

      // 일반 프로젝트 카드 클릭 시 모달 열기
      const carouselItem = carouselItems[index];
      const projectData = careerProjects.find((p) => p.id === carouselItem.id);

      if (projectData) {
        const modalData: ProjectData = {
          ...carouselItem,
          ...projectData,
        };
        setSelectedProject(modalData);
        setIsModalOpen(true);
      }
    } else {
      // non-active 카드 클릭 시 해당 카드로 이동
      changeIndex(index);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const totalCards = carouselItems.length + 1; // +1 for cat card
    
    if (distance > minSwipeDistance) {
      // 왼쪽으로 스와이프 - 다음 카드
      setActiveIndex((prev) => (prev + 1) % totalCards);
    } else if (distance < -minSwipeDistance) {
      // 오른쪽으로 스와이프 - 이전 카드  
      setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    }
  }, [touchStart, touchEnd]);

  // 키보드 네비게이션 추가
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const totalCards = carouselItems.length + 1;
    
    if (e.key === 'ArrowLeft') {
      setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    } else if (e.key === 'ArrowRight') {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }
  }, []);

  // 키보드 이벤트 리스너 등록
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Fragment>
      <div
        className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-visible no-scrollbar touch-pan-y"
        style={{
          perspective: '1000px',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselItems.map((item, index) => (
          <CarouselCard
            key={`card_${index}`}
            index={index}
            active={activeIndex}
            total={carouselItems.length + 1}
            title={item.title}
            num={item.num}
            imageSrc={item.imageSrc}
            teamSize={item.teamSize}
            category={item.category}
            onClick={() => handleCardClick(index)}
          />
        ))}
        <CarouselCard
          index={carouselItems.length}
          active={activeIndex}
          total={carouselItems.length + 1}
          title={'🐈'}
          num={''}
          imageSrc={'/carousel-hidden-00.jpg'}
          onClick={() => handleCardClick(carouselItems.length)}
        />
      </div>

      {/* 네비게이션 인디케이터 - 모바일에서만 표시 */}
      <div className="sm:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex justify-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
          {Array.from({ length: carouselItems.length + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`${index + 1}번째 프로젝트로 이동`}
            />
          ))}
        </div>
      </div>

      {/* 데스크톱 네비게이션 버튼 */}
      <div className="hidden sm:block">
        <button
          onClick={() => {
            const totalCards = carouselItems.length + 1;
            setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
          }}
          className="fixed left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-all duration-200 flex items-center justify-center z-50"
          aria-label="이전 프로젝트"
        >
          ←
        </button>
        <button
          onClick={() => {
            const totalCards = carouselItems.length + 1;
            setActiveIndex((prev) => (prev + 1) % totalCards);
          }}
          className="fixed right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white transition-all duration-200 flex items-center justify-center z-50"
          aria-label="다음 프로젝트"
        >
          →
        </button>
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectData={selectedProject}
      />
    </Fragment>
  );
};

export default CustomCarousel;
