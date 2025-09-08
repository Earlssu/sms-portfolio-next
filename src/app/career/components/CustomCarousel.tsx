'use client';

import React, { Fragment, useState } from 'react';
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

  return (
    <Fragment>
      <div
        className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-visible no-scrollbar"
        style={{
          perspective: '1000px',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
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
