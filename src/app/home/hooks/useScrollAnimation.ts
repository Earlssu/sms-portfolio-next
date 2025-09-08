import { useEffect, useState } from 'react';
import { SCROLL_CONFIG } from '@/app/home/constants/scrollConfig';
import { TRAIT_KEYS } from '@/app/home/types';
import { useBackgroundStore } from '@/shared/stores';

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [lastActiveCard, setLastActiveCard] = useState<number | null>(null);
  const [hasAutoFocused, setHasAutoFocused] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const setCurrentSection = useBackgroundStore(
    (state) => state.setCurrentSection
  );

  // AboutMe 섹션으로 자동 스크롤하는 함수
  const scrollToAboutMe = () => {
    const aboutMePosition = window.innerHeight; // aboutMe는 첫 번째 카드 (index 0)

    window.scrollTo({
      top: aboutMePosition,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 전체 스크롤 진행률 계산
    const maxScroll = documentHeight - viewportHeight;
    const progress = maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0;

    // 스크롤 방향 감지
    const isScrollingDown = currentScrollY > lastScrollY;
    const scrollDirection = isScrollingDown ? 'down' : 'up';

    // 상태 업데이트
    setScrollY(currentScrollY);
    setScrollProgress(progress);
    setLastScrollY(currentScrollY);

    // 섹션별 높이 및 카드 인덱스 계산
    const heroSectionHeight = viewportHeight;
    const heroThreshold =
      heroSectionHeight * SCROLL_CONFIG.HERO_ACTIVATION_THRESHOLD;
    const scrollAfterHero = Math.max(0, currentScrollY - heroSectionHeight);

    // 카드 인덱스 계산 - 섹션 중앙 기준
    const adjustedScrollAfterHero = scrollAfterHero + viewportHeight * 0.5;
    const currentCardIndex = Math.floor(
      adjustedScrollAfterHero / viewportHeight
    );

    // 카드 활성화 결정 - 단순하고 명확하게
    const shouldActivateCard = currentScrollY > heroThreshold;
    const activeCardIndex = shouldActivateCard
      ? Math.min(Math.max(currentCardIndex, 0), TRAIT_KEYS.length - 1)
      : null;

    setExpandedCard(activeCardIndex);

    // 섹션 변경 감지 및 자동 포커스 (한 번만, 그리고 아래로 스크롤할 때만)
    if (activeCardIndex !== lastActiveCard) {
      setLastActiveCard(activeCardIndex);

      // aboutMe 섹션 진입시 부드러운 스크롤 (최초 1회만, 아래로 스크롤 중일 때만)
      if (
        activeCardIndex === 0 &&
        lastActiveCard !== 0 &&
        !hasAutoFocused &&
        isScrollingDown
      ) {
        setHasAutoFocused(true);
        setTimeout(() => {
          const heroHeight = window.innerHeight;
          // AboutMe 섹션의 실제 중앙으로 포커싱 (거의 heroHeight와 동일)
          const targetPosition = heroHeight;

          // 현재 위치와 목표 위치가 충분히 다를 때만 스크롤
          if (Math.abs(window.scrollY - targetPosition) > 100) {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth',
            });
          }
        }, 150);
      }
    }

    // 현재 섹션 감지 및 배경 설정
    let currentSectionName = null;
    
    // Hero 섹션 감지 (최상단)
    const isInHeroSection = currentScrollY < heroSectionHeight * 0.5; // Hero 섹션의 절반 지점
    
    if (isInHeroSection) {
      currentSectionName = null; // Hero 섹션: 라이트모드
    } else if (activeCardIndex !== null && activeCardIndex >= 0) {
      currentSectionName = TRAIT_KEYS[activeCardIndex]; // Trait 섹션들: 다크모드
    } else {
      // ThankYouSection 진입 감지 (모든 trait 섹션을 벗어났을 때)
      const totalTraitSections = TRAIT_KEYS.length;
      const isInThankYouSection =
        currentScrollY > heroSectionHeight + totalTraitSections * viewportHeight;

      if (isInThankYouSection) {
        currentSectionName = 'thankYou'; // ThankYouSection: 다크모드 유지
      }
    }

    setCurrentSection(currentSectionName);

    // aboutMe 섹션을 벗어나면 자동포커싱 리셋 (위로 스크롤할 때)
    if (activeCardIndex !== 0 && hasAutoFocused && !isScrollingDown) {
      setHasAutoFocused(false);
    }
  };

  useEffect(() => {
    // 클라이언트 사이드 마운트 확인
    setIsClient(true);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    scrollY,
    expandedCard,
    scrollProgress,
    isClient,
    scrollToAboutMe,
  };
};
