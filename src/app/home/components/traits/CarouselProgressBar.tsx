'use client';

import React from 'react';

interface CarouselProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

export const CarouselProgressBar: React.FC<CarouselProgressBarProps> = ({
  currentSlide,
  totalSlides,
}) => {
  return (
    <div className="flex-1 mx-4 pt-8">
      <div className="flex items-center gap-2 text-white/70 text-sm">
        <span>{currentSlide + 1}</span>
        <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400 transition-all duration-300 ease-out rounded-full"
            style={{
              width: `${((currentSlide + 1) / totalSlides) * 100}%`,
            }}
          />
        </div>
        <span>{totalSlides}</span>
      </div>
    </div>
  );
};