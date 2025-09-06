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
  );
};
