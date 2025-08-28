import { useEffect, useState } from 'react';
import { SCROLL_CONFIG } from '@/app/home/constants/scrollConfig';
import { TRAIT_KEYS } from '@/app/home/constants/traitData';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 전체 스크롤 진행률 계산
    const maxScroll = documentHeight - viewportHeight;
    const progress = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0;

    // 상태 업데이트
    setScrollY(currentScrollY);
    setScrollProgress(progress);

    // 섹션별 높이 및 카드 인덱스 계산
    const heroSectionHeight = viewportHeight;
    const heroThreshold =
      heroSectionHeight * SCROLL_CONFIG.HERO_ACTIVATION_THRESHOLD;
    const scrollAfterHero = Math.max(0, currentScrollY - heroSectionHeight);
    const currentCardIndex = Math.floor(scrollAfterHero / viewportHeight);

    // 카드 활성화 결정
    const shouldActivateCard = currentScrollY > heroThreshold;
    const activeCardIndex = shouldActivateCard
      ? Math.min(currentCardIndex, TRAIT_KEYS.length - 1)
      : null;

    setExpandedCard(activeCardIndex);

    // 🔍 개발 모드 디버깅
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Scroll Debug:', {
        currentScrollY: Math.round(currentScrollY),
        progress: Math.round(progress),
        heroThreshold: Math.round(heroThreshold),
        scrollAfterHero: Math.round(scrollAfterHero),
        currentCardIndex,
        activeCardIndex,
      });
    }
  };

  useEffect(() => {
    // 클라이언트 사이드 마운트 확인
    setIsClient(true);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    expandedCard,
    scrollProgress,
    isClient,
  };
};
