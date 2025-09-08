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
  const carousel = useCarousel({
    totalSlides,
    isExpanded,
  });

  // 키보드 이벤트
  useCarouselKeyboard({
    isExpanded,
    prevSlide: carousel.prevSlide,
    nextSlide: carousel.nextSlide,
    toggleAutoPlay: carousel.toggleAutoPlay,
  });

  if (!slides || slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div ref={carouselRef} className="relative w-full h-full flex flex-col">
      {/* 상단 컨트롤 */}
      <div className="flex justify-between items-center mb-6 px-8">
        <CarouselProgressBar
          currentSlide={carousel.currentSlide}
          totalSlides={totalSlides}
        />
        <CarouselControls
          isAutoPlaying={carousel.isAutoPlaying}
          onToggleAutoPlay={carousel.toggleAutoPlay}
          onSkipToLast={carousel.skipToLast}
        />
      </div>

      {/* 슬라이드 콘텐츠 */}
      <div className="flex-1 relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${carousel.currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <CarouselSlide
                slide={slide}
                isActive={index === carousel.currentSlide}
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
        currentSlide={carousel.currentSlide}
        onSlideChange={carousel.goToSlide}
        onPrevSlide={carousel.prevSlide}
        onNextSlide={carousel.nextSlide}
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
