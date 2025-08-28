'use client';

import React, {Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import {useCommonTranslations} from '@/shared/hooks/useCommonTranslations';
import {HeroSection} from './HeroSection';
import {ScrollProgressIndicator} from './ScrollPageIndicator';
import {TraitCardList} from './TraitCardList';
import {ThankYouSection} from './ThankYouSection';
import {useScrollAnimation} from '../hooks/useScrollAnimation';

/**
 * 클라이언트 사이드 애니메이션이 필요한 컴포넌트들
 * 스크롤 이벤트, 타이핑 애니메이션 등을 담당
 */
export const ClientAnimations: React.FC = () => {
  const { hero, heroDesc01, heroDesc02 } = useCommonTranslations();
  const { t, i18n } = useTranslation();
  const { scrollY, expandedCard, scrollProgress, isClient } =
    useScrollAnimation();

  return (
    <Fragment>
      {/* 히어로 섹션 (타이핑 애니메이션) */}
      <HeroSection
        hero={hero}
        heroDesc01={heroDesc01}
        heroDesc02={heroDesc02}
        language={i18n.language}
      />

      {/* 스크롤 진행 표시기 (클라이언트 전용) */}
      <ScrollProgressIndicator
        scrollProgress={scrollProgress}
        scrollY={scrollY}
        expandedCard={expandedCard}
        isClient={isClient}
      />

      {/* 특성 카드 섹션들 (스크롤 애니메이션) */}
      <TraitCardList expandedCard={expandedCard} t={t} />

      {/* 감사 섹션 (클라이언트 렌더링, SEO는 I18nStaticContent에서 처리) */}
      <ThankYouSection mode="client" t={t} />
    </Fragment>
  );
};
