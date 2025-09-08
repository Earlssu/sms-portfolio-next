import React from 'react';
import TypingText from '@/shared/components/TypingText';
import { SCROLL_CONFIG } from '@/app/home/constants/scrollConfig';

interface HeroSectionProps {
  hero: string;
  heroDesc01: string;
  heroDesc02: string;
  language: string;
}

/**
 * 첫 섹션 (Hero)
 * @param hero 메인 타이틀
 * @param heroDesc01 서브 설명 1
 * @param heroDesc02 서브 설명 2
 * @param language i18n 언어
 * @constructor
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  hero,
  heroDesc01,
  heroDesc02,
  language,
}) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center responsive-padding relative">
      <div className="responsive-margin flex flex-col gap-4 sm:gap-6 md:gap-8">
        {/* 메인 타이틀 */}
        <h1 className="text-hero-mobile sm:text-hero-tablet lg:text-hero-desktop font-bold text-primary text-center leading-tight">
          <TypingText
            key={`hero-${language}`}
            text={hero || ''}
            delay={SCROLL_CONFIG.DELAYS.HERO}
            speed={SCROLL_CONFIG.TYPING_SPEEDS.HERO}
          />
        </h1>

        {/* 서브 설명 */}
        <TypingText
          key={`heroDesc-${language}`}
          text={`${heroDesc01 || ''}\n${heroDesc02 || ''}`}
          delay={SCROLL_CONFIG.DELAYS.DESCRIPTION}
          speed={SCROLL_CONFIG.TYPING_SPEEDS.DESCRIPTION}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary leading-relaxed sm:leading-10 text-center px-4 sm:px-0"
        />
      </div>
    </section>
  );
};
