import React from 'react';

interface CarouselControlsProps {
  isAutoPlaying: boolean;
  onToggleAutoPlay: () => void;
  onSkipToLast: () => void;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  isAutoPlaying,
  onToggleAutoPlay,
  onSkipToLast,
}) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={onToggleAutoPlay}
        className="px-3 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 text-white text-sm backdrop-blur-sm"
        title={isAutoPlaying ? '일시정지' : '재생'}
      >
        {isAutoPlaying ? '⏸️' : '▶️'}
      </button>

      <button
        onClick={onSkipToLast}
        className="px-3 py-2 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 text-white text-sm backdrop-blur-sm"
        title="마지막으로 건너뛰기"
      >
        ⏭️
      </button>
    </div>
  );
};