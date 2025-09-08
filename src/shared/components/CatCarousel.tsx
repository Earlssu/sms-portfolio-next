'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import 'animate.css';

interface CatCarouselProps {
  isDarkMode: boolean;
}

export const CatCarousel: React.FC<CatCarouselProps> = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const pathname = usePathname();

  // 현재 페이지에 따라 다른 이미지 배열 사용
  const getCatImages = () => {
    if (pathname === '/career' || pathname?.includes('career')) {
      // Career 페이지 - 숨겨진 고양이 이미지들
      return [
        '/carousel-hidden-01.jpg',
        '/carousel-hidden-02.jpg',
        '/carousel-hidden-03.jpg',
        '/carousel-hidden-04.jpg',
        '/carousel-hidden-05.jpg',
        '/carousel-hidden-06.jpg',
      ];
    } else {
      // Home 페이지 - 기본 고양이 이미지들
      return [
        '/thank-you-01.jpg',
        '/thank-you-02.jpg',
        '/thank-you-03.jpg',
        '/thank-you-04.jpg',
        '/thank-you-05.jpg',
      ];
    }
  };

  const catImages = getCatImages();
  const totalSlides = catImages.length;

  // 자동 재생 로직
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000); // 3초마다 전환

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // 3초 후 자동재생 재개
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  // 페이지별 alt 텍스트 설정
  const getAltText = (index: number) => {
    if (pathname === '/career' || pathname?.includes('career')) {
      return `숨겨진 고양이 ${index + 1}`;
    } else {
      return `귀여운 고양이 ${index + 1}`;
    }
  };

  return (
    <div className="relative w-full h-80 mx-auto mb-8">
      {/* 메인 캐러셀 컨테이너 */}
      <div
        className={`
          relative w-full h-full rounded-2xl overflow-hidden shadow-2xl
          transition-all duration-500 ease-in-out
          ${
            isDarkMode
              ? 'ring-2 ring-white/20 shadow-lg shadow-black/50'
              : 'ring-2 ring-gray-200/50 shadow-lg shadow-gray-400/30'
          }
        `}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* 고양이 이미지들 */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {catImages.map((imagePath, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={imagePath}
                alt={getAltText(index)}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 320px"
              />

              {/* 이미지 오버레이 */}
              <div
                className={`
                  absolute inset-0 transition-opacity duration-300
                  ${
                    isDarkMode
                      ? 'bg-gradient-to-t from-black/20 to-transparent'
                      : 'bg-gradient-to-t from-white/10 to-transparent'
                  }
                `}
              />
            </div>
          ))}
        </div>

        {/* 자동재생 토글 버튼 */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`
            absolute top-2 right-2 w-8 h-8 rounded-full 
            transition-all duration-200 z-10 text-sm
            flex items-center justify-center
            ${
              isDarkMode
                ? 'bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm'
                : 'bg-white/40 text-gray-800 hover:bg-white/60 backdrop-blur-sm'
            }
          `}
          title={isAutoPlaying ? '일시정지' : '재생'}
        >
          {isAutoPlaying ? '⏸' : '▶'}
        </button>
      </div>

      {/* 하단 도트 네비게이션 */}
      <div className="flex justify-center gap-2 mt-4">
        {catImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all duration-200
              ${
                index === currentSlide
                  ? isDarkMode
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-gray-800 scale-125 shadow-lg'
                  : isDarkMode
                    ? 'bg-white/40 hover:bg-white/60'
                    : 'bg-gray-400/60 hover:bg-gray-600/80'
              }
            `}
          />
        ))}
      </div>

      {/* 고양이 이모지 장식 */}
      <div className="absolute -top-3 -left-3 text-2xl animate__animated animate__jello animate__infinite">
        🐾
      </div>
    </div>
  );
};
