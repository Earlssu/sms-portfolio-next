'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TypingText from '@/shared/components/TypingText';
import { useCommonTranslations } from '@/shared/hooks/useCommonTranslations';
import 'animate.css';
import { TRAIT_KEYS } from '@/app/home/constants/traitData';
import { TraitSection } from '@/app/home/components/TraitSection';
import { ScrollProgressIndicator } from '@/app/home/components/ScrollPageIndicator';
import { SCROLL_CONFIG } from '@/app/home/constants/scrollConfig';

export default function Home() {
  const { hero, heroDesc01, heroDesc02 } = useCommonTranslations();
  const { t, i18n, ready } = useTranslation();
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

  // i18n이 준비되지 않았으면 로딩 표시
  if (!ready) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-2xl text-primary">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* 히어로 섹션 - 100vh */}
      <section className="h-screen flex flex-col justify-center items-center px-10 relative">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-primary text-center">
            <TypingText
              key={`hero-${i18n.language}`}
              text={hero || ''}
              speed={SCROLL_CONFIG.TYPING_SPEEDS.HERO}
            />
          </h1>

          <TypingText
            key={`heroDesc-${i18n.language}`}
            text={`${heroDesc01 || ''}\n${heroDesc02 || ''}`}
            delay={SCROLL_CONFIG.DELAYS.DESCRIPTION}
            speed={SCROLL_CONFIG.TYPING_SPEEDS.DESCRIPTION}
            className="text-xl text-secondary leading-10 text-center"
          />
        </div>
      </section>

      {/* 스크롤 진행 표시기 */}
      <ScrollProgressIndicator
        scrollProgress={scrollProgress}
        scrollY={scrollY}
        expandedCard={expandedCard}
        isClient={isClient}
      />

      {/* 특성 카드 섹션들 */}
      {TRAIT_KEYS.map((traitKey, index) => (
        <TraitSection
          key={traitKey}
          traitKey={traitKey}
          index={index}
          isExpanded={expandedCard === index}
          t={t}
        />
      ))}

      {/* 마지막 여백 섹션 */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('home.thankYou')}
          </h2>
          <p className="text-secondary">{t('home.moreInfo')}</p>
        </div>
      </section>
    </div>
  );
}
