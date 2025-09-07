import React, { Fragment } from 'react';

interface CarouselNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  totalSlides,
  currentSlide,
  onSlideChange,
  onPrevSlide,
  onNextSlide,
}) => {
  return (
    <Fragment>
      {/* 하단 도트 네비게이션 */}
      <div className="flex justify-center gap-3 mt-8 pb-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
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
        onClick={onPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:bg-white/25 transition-all duration-200 text-white text-xl backdrop-blur-sm z-20"
        style={{ display: currentSlide === 0 ? 'none' : 'block' }}
      >
        ←
      </button>

      <button
        onClick={onNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:bg-white/25 transition-all duration-200 text-white text-xl backdrop-blur-sm z-20"
        style={{ display: currentSlide === totalSlides - 1 ? 'none' : 'block' }}
      >
        →
      </button>
    </Fragment>
  );
};
