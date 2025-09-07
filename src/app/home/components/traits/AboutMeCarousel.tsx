'use client';

import React, { useRef } from 'react';
import { useBackgroundStore } from '@/shared/stores';
import {
  CarouselControls,
  CarouselNavigation,
  CarouselProgressBar,
  CarouselSlide,
  ContactSection,
  useCarousel,
  useCarouselData,
  useCarouselKeyboard,
} from '@/app/home/components';
import { TabContentType } from '@/app/home/types';

interface AboutMeCarouselProps {
  isExpanded: boolean;
  contact?: TabContentType;
}

export const AboutMeCarousel: React.FC<AboutMeCarouselProps> = ({
  isExpanded,
  contact,
}) => {
  const { isDarkMode } = useBackgroundStore();
  const carouselRef = useRef<HTMLDivElement>(null);

  // 캐러셀 데이터
  const { slides, totalSlides } = useCarouselData();

  // 캐러셀 로직
  const {
    currentSlide,
    isAutoPlaying,
    setIsAutoPlaying,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleAutoPlay,
    skipToLast,
  } = useCarousel({
    totalSlides,
    isExpanded,
  });

  // 키보드 이벤트
  useCarouselKeyboard({
    isExpanded,
    prevSlide,
    nextSlide,
    toggleAutoPlay,
  });

  if (!slides || slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-full flex flex-col"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 상단 컨트롤 */}
      <div className="flex justify-between items-center mb-6 px-8">
        <CarouselProgressBar
          currentSlide={currentSlide}
          totalSlides={totalSlides}
        />
        <CarouselControls
          isAutoPlaying={isAutoPlaying}
          onToggleAutoPlay={toggleAutoPlay}
          onSkipToLast={skipToLast}
        />
      </div>

      {/* 슬라이드 콘텐츠 */}
      <div className="flex-1 relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <CarouselSlide
                slide={slide}
                isActive={index === currentSlide}
                slideIndex={index}
                totalSlides={totalSlides}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 네비게이션 */}
      <CarouselNavigation
        totalSlides={totalSlides}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
      />

      {/* 연락처 섹션 */}
      {contact && (
        <div className="flex justify-center items-center py-4">
          <ContactSection contact={contact} isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
};
