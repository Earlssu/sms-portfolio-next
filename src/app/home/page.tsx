'use client';

import { useEffect, useState } from 'react';
import TypingText from '@/shared/components/TypingText';
import { useCommonTranslations } from '@/shared/hooks/useCommonTranslations';
import 'animate.css';
import TraitCard from '@/app/home/components/TraitCard';

export default function Home() {
  const { hero, heroDesc01, heroDesc02 } = useCommonTranslations();
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
        setExpandedCard(Math.min(currentCardIndex, traitData.length - 1));
      } else {
        setExpandedCard(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const traitData = [
    {
      title: '유학생',
      detail:
        '호주에서 3년간 유학하며 글로벌 마인드셋과 영어 실력을 키웠습니다.',
      skills: [
        'Cross-cultural Communication',
        'English Fluency',
        'Adaptability',
      ],
    },
    {
      title: '협업이 가장 편했던 개발자',
      detail:
        '팀워크를 중시하며 원활한 소통으로 프로젝트를 성공적으로 이끌어갑니다.',
      skills: ['Team Leadership', 'Communication', 'Project Management'],
    },
    {
      title: '힘들 때 웃어야 일류다',
      detail: '어려운 상황에서도 긍정적인 마인드로 문제를 해결해나갑니다.',
      skills: ['Positive Mindset', 'Problem Solving', 'Resilience'],
    },
    {
      title: 'Fast Learner',
      detail:
        '새로운 기술과 트렌드를 빠르게 습득하고 적용하는 능력이 뛰어납니다.',
      skills: ['Quick Learning', 'Technology Adaptation', 'Continuous Growth'],
    },
  ];

  return (
    <div className="relative">
      {/* 히어로 섹션 - 100vh */}
      <section className="h-screen flex flex-col justify-center items-center px-10 relative">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-primary text-center">
            <TypingText text={hero} speed={50} />
          </h1>
          <TypingText
            text={heroDesc01 + '\n' + heroDesc02}
            delay={1.5}
            speed={30}
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
      {traitData.map((trait, index) => (
        <section 
          key={index} 
          className="h-screen flex items-center justify-center px-10 relative"
        >
          {/* 고정된 카드 컨테이너 */}
          <div className="max-w-screen-xl mx-auto w-full flex items-center justify-center">
            <TraitCard
              title={trait.title}
              className={`transition-all duration-1000 ease-out ${
                expandedCard === index ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
              }`}
              isExpanded={expandedCard === index}
            >
              {expandedCard === index && (
                <div className="mt-4 space-y-3 animate__animated animate__fadeIn animate__delay-500ms">
                  <p className="text-quaternary text-sm leading-relaxed">
                    {trait.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trait.skills.map((skill, skillIndex) => (
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
      ))}

      {/* 마지막 여백 섹션 */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Thank you for scrolling!
          </h2>
          <p className="text-secondary">더 많은 정보는 다른 페이지에서 확인하세요.</p>
        </div>
      </section>
    </div>
  );
}
