'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBackgroundStore } from '@/shared/stores';
import {
  CarouselControls,
  CarouselNavigation,
  CarouselProgressBar,
  CarouselSlide,
  ContactSection,
} from '@/app/home/components';

interface AboutMeCarouselProps {
  isExpanded: boolean;
  contact?: {
    email: string;
    github: string;
    blog: string;
    resume: string;
  };
}

interface CarouselSlideData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  highlight?: string;
  closing?: string;
  features?: Array<{ title: string; content: string }>;
  activities?: Array<{
    icon: string;
    title: string;
    period: string;
    description: string;
  }>;
  experiences?: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
  contact?: {
    email: string;
    github: string;
    blog: string;
    resume: string;
  };
}

export const AboutMeCarousel: React.FC<AboutMeCarouselProps> = ({
  isExpanded,
  contact,
}) => {
  const { t } = useTranslation();
  const { isDarkMode } = useBackgroundStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 캐러셀 데이터 가져오기
  const slides = t('traits.aboutMe.carouselSlides', {
    returnObjects: true,
  }) as CarouselSlideData[];

  const totalSlides = slides?.length || 0;

  // 자동 재생 로직
  useEffect(() => {
    if (!isAutoPlaying || !isExpanded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // 6초마다 자동 전환 (내용이 많아져서 조금 더 길게)

    return () => clearInterval(interval);
  }, [isAutoPlaying, isExpanded, totalSlides]);

  // 슬라이드 이동 함수
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // 3초 후 자동재생 재개
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // 다음 슬라이드
  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  // 이전 슬라이드
  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isExpanded) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          setIsAutoPlaying(!isAutoPlaying);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isExpanded, currentSlide, isAutoPlaying]);

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
          onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
          onSkipToLast={() => goToSlide(totalSlides - 1)}
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
