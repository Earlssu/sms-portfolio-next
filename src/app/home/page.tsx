'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCommonTranslations } from '@/shared/hooks/useCommonTranslations';
import 'animate.css';
import { HeroSection } from '@/app/home/components/HeroSection';
import { ScrollProgressIndicator } from '@/app/home/components/ScrollPageIndicator';
import { TraitCardList } from '@/app/home/components/TraitCardList';
import { ThankYouSection } from '@/app/home/components/ThankYouSection';
import { LoadingScreen } from '@/app/home/components/LoadingScreen';
import { useScrollAnimation } from '@/app/home/hooks/useScrollAnimation';

export default function Home() {
  const { hero, heroDesc01, heroDesc02 } = useCommonTranslations();
  const { t, i18n, ready } = useTranslation();
  const { scrollY, expandedCard, scrollProgress, isClient } =
    useScrollAnimation();

  if (!ready) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      <HeroSection
        hero={hero}
        heroDesc01={heroDesc01}
        heroDesc02={heroDesc02}
        language={i18n.language}
      />

      <ScrollProgressIndicator
        scrollProgress={scrollProgress}
        scrollY={scrollY}
        expandedCard={expandedCard}
        isClient={isClient}
      />

      <TraitCardList expandedCard={expandedCard} t={t} />

      <ThankYouSection t={t} />
    </div>
  );
}
