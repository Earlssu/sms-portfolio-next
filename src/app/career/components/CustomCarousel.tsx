'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CarouselCard from '@/app/career/components/CarouselCard';
import ProjectDetailModal from '@/app/career/components/ProjectDetailModal';
import carouselItems from '@/app/career/constants/carouselItems';

const CustomCarousel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // translation.json에서 career 프로젝트 데이터 가져오기
  const careerProjects = t('career.projects', { returnObjects: true }) as any[];

  const changeIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index: number) => {
    if (index === activeIndex) {
      // active 카드 클릭 시 모달 열기
      const carouselItem = carouselItems[index];
      const projectData = careerProjects.find(p => p.id === carouselItem.id);
      
      if (projectData) {
        const modalData = {
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

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
        {carouselItems.map((item, index) => (
          <CarouselCard
            key={`card_${index}`}
            index={index}
            active={activeIndex}
            total={carouselItems.length}
            title={item.title}
            num={item.num}
            imageSrc={item.imageSrc}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectData={selectedProject}
      />
    </>
  );
};

export default CustomCarousel;
