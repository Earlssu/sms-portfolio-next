'use client';

import React, { useRef, useState, useCallback } from 'react';
import { useBackgroundStore } from '@/shared/stores';
import {
  CarouselControls,
  CarouselNavigation,
  CarouselProgressBar,
  CarouselSlide,
  ContactSection,
} from '@/app/home/components';
import {
  useCarousel,
  useCarouselData,
  useCarouselKeyboard,
} from '@/app/home/hooks';
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
  
  // 터치/드래그 상태
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

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

  // 터치 이벤트 핸들러
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(0); // 터치 시작 시 touchEnd 초기화
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      // 왼쪽으로 스와이프 - 다음 슬라이드
      carousel.nextSlide();
    } else if (distance < -minSwipeDistance) {
      // 오른쪽으로 스와이프 - 이전 슬라이드
      carousel.prevSlide();
    }
  }, [touchStart, touchEnd, carousel]);

  if (!slides || slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div ref={carouselRef} className="relative w-full h-fit flex flex-col max-h-[80vh]">
      {/* 상단 컨트롤 */}
      <div className="flex justify-between items-center mb-4 sm:mb-6 px-4 sm:px-8 flex-shrink-0">
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
      <div 
        className="relative overflow-hidden rounded-lg h-[60vh] sm:h-[65vh] md:h-[70vh] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${carousel.currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full">
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
      <div className="flex-shrink-0 mt-4">
        <CarouselNavigation
          totalSlides={totalSlides}
          currentSlide={carousel.currentSlide}
          onSlideChange={carousel.goToSlide}
          onPrevSlide={carousel.prevSlide}
          onNextSlide={carousel.nextSlide}
        />
      </div>

      {/* 연락처 섹션 */}
      {contact && (
        <div className="flex justify-center items-center py-2 sm:py-4 flex-shrink-0">
          <ContactSection contact={contact} isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );
};
