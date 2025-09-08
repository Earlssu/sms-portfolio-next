'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseCarouselProps {
  totalSlides: number;
  isExpanded: boolean;
  autoPlayInterval?: number;
  pauseDuration?: number;
}

export const useCarousel = ({
  totalSlides,
  isExpanded,
  autoPlayInterval = 6000,
  pauseDuration = 3000,
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userStoppedAutoPlay, setUserStoppedAutoPlay] = useState(false);

  // 자동 재생 로직
  useEffect(() => {
    if (!isAutoPlaying || !isExpanded || totalSlides === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isExpanded, totalSlides, autoPlayInterval]);

  // 슬라이드 이동 함수
  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(index);
      setIsAutoPlaying(false);

      // 사용자가 수동으로 정지하지 않았다면 일정 시간 후 자동재생 재개
      if (!userStoppedAutoPlay) {
        setTimeout(() => setIsAutoPlaying(true), pauseDuration);
      }
    },
    [pauseDuration, userStoppedAutoPlay]
  );

  // 다음 슬라이드
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % totalSlides;
      setIsAutoPlaying(false);
      
      // 사용자가 수동으로 정지하지 않았다면 일정 시간 후 자동재생 재개
      if (!userStoppedAutoPlay) {
        setTimeout(() => setIsAutoPlaying(true), pauseDuration);
      }
      return nextIndex;
    });
  }, [totalSlides, pauseDuration, userStoppedAutoPlay]);

  // 이전 슬라이드
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const prevIndex = prev === 0 ? totalSlides - 1 : prev - 1;
      setIsAutoPlaying(false);
      
      // 사용자가 수동으로 정지하지 않았다면 일정 시간 후 자동재생 재개
      if (!userStoppedAutoPlay) {
        setTimeout(() => setIsAutoPlaying(true), pauseDuration);
      }
      return prevIndex;
    });
  }, [totalSlides, pauseDuration, userStoppedAutoPlay]);

  // 자동재생 토글
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => {
      const newValue = !prev;
      // 사용자가 토글 버튼으로 정지했는지 추적
      if (!newValue) {
        setUserStoppedAutoPlay(true);
      } else {
        setUserStoppedAutoPlay(false);
      }
      return newValue;
    });
  }, []);

  // 마지막 슬라이드로 이동
  const skipToLast = useCallback(() => {
    goToSlide(totalSlides - 1);
  }, [goToSlide, totalSlides]);

  return {
    currentSlide,
    isAutoPlaying,
    setIsAutoPlaying,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleAutoPlay,
    skipToLast,
  };
};
