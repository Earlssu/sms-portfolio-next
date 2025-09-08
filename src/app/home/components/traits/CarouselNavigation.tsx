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
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`${index + 1}번째 슬라이드로 이동`}
          />
        ))}
      </div>

      {/* 이전/다음 버튼 - 데스크톱에서만 표시 */}
      <button
        onClick={onPrevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:text-white/50 transition-all duration-200 items-center justify-center text-white backdrop-blur-sm"
        aria-label="이전 슬라이드"
      >
        ←
      </button>
      <button
        onClick={onNextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hover:text-white/50 transition-all duration-200 items-center justify-center text-white backdrop-blur-sm"
        aria-label="다음 슬라이드"
      >
        →
      </button>
    </Fragment>
  );
};
