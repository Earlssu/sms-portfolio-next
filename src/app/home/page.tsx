'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TypingText from '@/shared/components/TypingText';
import { useCommonTranslations } from '@/shared/hooks/useCommonTranslations';
import 'animate.css';
import TraitCard from '@/app/home/components/TraitCard';
import { TRAIT_KEYS, getTraitTranslationKey, type TraitKey } from '@/app/home/constants/traitData';

export default function Home() {
  const { hero, heroDesc01, heroDesc02 } = useCommonTranslations();
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / maxScroll) * 100;

      setScrollY(currentScrollY);
      setScrollProgress(progress);

      // 각 카드별 섹션 높이 (100vh씩)
      const heroSectionHeight = window.innerHeight; // 첫 번째 섹션
      const cardSectionHeight = window.innerHeight; // 각 카드마다 100vh

      // 현재 어떤 카드 섹션에 있는지 계산
      const scrollAfterHero = Math.max(0, currentScrollY - heroSectionHeight);
      const currentCardIndex = Math.floor(scrollAfterHero / cardSectionHeight);

              if (currentScrollY > heroSectionHeight * 0.8) {
        // 히어로 섹션을 80% 지나면 카드 활성화 시작
        setExpandedCard(Math.min(currentCardIndex, TRAIT_KEYS.length - 1));
      } else {
        setExpandedCard(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* 히어로 섹션 - 100vh */}
      <section className="h-screen flex flex-col justify-center items-center px-10 relative">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-primary text-center">
            <TypingText text={hero} speed={75} />
          </h1>
          <TypingText
            text={heroDesc01 + '\n' + heroDesc02}
            delay={2}
            speed={50}
            className="text-xl text-secondary leading-10 text-center"
          />
        </div>
      </section>

      {/* 좌측 스크롤 진행 표시기 */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="w-1 h-64 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-b from-quaternary to-primary transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <div className="mt-4 text-sm text-quaternary font-mono">
          {Math.round(scrollProgress)}%
        </div>
      </div>

      {/* 카드 섹션들 - 각각 100vh */}
      {TRAIT_KEYS.map((traitKey, index) => {
        const title = t(getTraitTranslationKey(traitKey, 'title'));
        const detail = t(getTraitTranslationKey(traitKey, 'detail'));
        const skills = t(getTraitTranslationKey(traitKey, 'skills'), { returnObjects: true }) as string[];
        
        return (
          <section
            key={traitKey}
            className="h-screen flex items-center justify-center px-10 relative"
          >
            {/* 고정된 카드 컨테이너 */}
            <div className="max-w-screen-xl mx-auto w-full flex items-center justify-center">
              <TraitCard
                title={title}
                className={`transition-all duration-1000 ease-out ${
                  expandedCard === index
                    ? 'scale-100 opacity-100'
                    : 'scale-90 opacity-60'
                }`}
                isExpanded={expandedCard === index}
              >
                {expandedCard === index && (
                  <div className="mt-4 space-y-3 animate__animated animate__fadeIn">
                    <p className="text-quaternary text-sm leading-relaxed">
                      {detail}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary text-quaternary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </TraitCard>
            </div>
          </section>
        );
      })}

      {/* 마지막 여백 섹션 */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('home.thankYou')}
          </h2>
          <p className="text-secondary">
            {t('home.moreInfo')}
          </p>
        </div>
      </section>
    </div>
  );
}
