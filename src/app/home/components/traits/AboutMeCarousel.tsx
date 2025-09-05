'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CarouselSlide } from './CarouselSlide';

interface AboutMeCarouselProps {
  isExpanded: boolean;
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
}) => {
  const { t } = useTranslation();
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
      className="relative w-full h-full flex flex-col pt-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 상단 컨트롤 */}
      <div className="flex justify-between items-center mb-6 px-2">
        {/* 프로그레스 바 */}
        <div className="flex-1 mx-4">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm text-white/80">
            <span>{currentSlide + 1}</span>
            <span>{totalSlides}</span>
          </div>
        </div>

        {/* 컨트롤 버튼 */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-3 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 text-white text-sm backdrop-blur-sm"
            title={isAutoPlaying ? '일시정지' : '재생'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>

          <button
            onClick={() => goToSlide(totalSlides - 1)}
            className="px-3 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 text-white text-sm backdrop-blur-sm"
            title="마지막으로 건너뛰기"
          >
            ⏭️
          </button>
        </div>
      </div>

      {/* 슬라이드 콘텐츠 */}
      <div className="flex-1 relative overflow-hidden">
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

      {/* 하단 네비게이션 */}
      <div className="flex justify-center gap-3 mt-8 pb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* 좌우 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full  hover:bg-white/25 transition-all duration-200 text-white text-xl backdrop-blur-sm z-20"
        style={{ display: currentSlide === 0 ? 'none' : 'block' }}
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:bg-white/25 transition-all duration-200 text-white text-xl backdrop-blur-sm z-20"
        style={{ display: currentSlide === totalSlides - 1 ? 'none' : 'block' }}
      >
        →
      </button>
    </div>
  );
};
