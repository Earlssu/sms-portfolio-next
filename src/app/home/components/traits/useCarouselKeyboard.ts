import { useEffect } from 'react';

interface UseCarouselKeyboardProps {
  isExpanded: boolean;
  prevSlide: () => void;
  nextSlide: () => void;
  toggleAutoPlay: () => void;
}

export const useCarouselKeyboard = ({
  isExpanded,
  prevSlide,
  nextSlide,
  toggleAutoPlay,
}: UseCarouselKeyboardProps) => {
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
          toggleAutoPlay();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isExpanded, prevSlide, nextSlide, toggleAutoPlay]);
};
