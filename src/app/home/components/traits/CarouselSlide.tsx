'use client';

import React from 'react';
import { ContactSection } from './ContactSection';

interface CarouselSlideProps {
  slide: {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    highlight?: string;
    closing?: string;
    features?: Array<{ title: string; content: string }>;
    activities?: Array<{
      icon: string;
      title: string;
      period: string;
      description: string;
    }>;
    experiences?: Array<{
      company: string;
      position: string;
      period: string;
      description: string;
      achievements: string[];
    }>;
    contact?: {
      email: string;
      github: string;
      blog: string;
      resume: string;
    };
  };
  isActive: boolean;
  slideIndex: number;
  totalSlides: number;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slide,
  isActive,
  slideIndex,
}) => {
  const getSlideTheme = (id: string) => {
    // 슬라이드별 테마 색상 정의 - 어두운 배경에 맞게 조정
    const themes = {
      intro: 'from-blue-600/20 to-purple-600/20',
      strength: 'from-green-600/20 to-teal-600/20',
      life: 'from-orange-600/20 to-red-600/20',
      recentActivities: 'from-pink-600/20 to-rose-600/20',
      career: 'from-indigo-600/20 to-blue-600/20',
    };
    return themes[id as keyof typeof themes] || 'from-gray-600/20 to-slate-600/20';
  };

  const getSlideIcon = (id: string) => {
    const icons = {
      intro: '🧗‍♂️',
      strength: '🤝',
      life: '🎯',
      recentActivities: '🚀',
      career: '💼',
    };
    return icons[id as keyof typeof icons] || '✨';
  };

  return (
    <div
      className={`
        h-full flex flex-col justify-center items-center p-8 text-center
        transition-all duration-700 ease-in-out
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
    >
      {/* 배경 그라데이션 - 더 어둡고 일치하는 색상 */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${getSlideTheme(slide.id)}
          opacity-0 transition-opacity duration-1000
          ${isActive ? 'opacity-40' : 'opacity-0'}
        `}
      />

      {/* 콘텐츠 래퍼 */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 아이콘 */}
        <div className="text-6xl mb-6 animate-bounce">
          {getSlideIcon(slide.id)}
        </div>

        {/* 제목 */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {slide.title}
        </h1>

        {/* 부제목 */}
        {slide.subtitle && (
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            {slide.subtitle}
          </h2>
        )}

        {/* 메인 콘텐츠 */}
        <div className="space-y-6">
          {/* 기본 콘텐츠 */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {slide.content}
          </p>

          {/* 하이라이트 텍스트 */}
          {slide.highlight && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 my-6">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                {slide.highlight}
              </p>
            </div>
          )}

          {/* 특징 목록 (강점 슬라이드용) */}
          {slide.features && (
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {slide.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-left"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 마무리 텍스트 */}
          {slide.closing && (
            <p className="text-lg text-gray-300 leading-relaxed italic mt-6">
              {slide.closing}
            </p>
          )}

          {/* 최근 활동 리스트 */}
          {slide.activities && (
            <div className="grid gap-4 mt-8 max-w-4xl">
              {slide.activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-blue-200 mb-2">
                        {activity.period}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 경력 리스트 */}
          {slide.experiences && (
            <div className="space-y-6 mt-8 max-w-4xl">
              {slide.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left"
                >
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-blue-200 mb-1">{exp.position}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    {/* 성과 리스트 */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 연락처 섹션 */}
          {slide.contact && (
            <div className="mt-8">
              <ContactSection contact={slide.contact} isDarkMode={true} />
            </div>
          )}
        </div>

        {/* 슬라이드 번호 표시 */}
        <div className="absolute top-4 right-4 text-sm text-gray-400">
          {slideIndex + 1}
        </div>

        {/* 진행 표시 (선택적) */}
        {isActive && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-white/60 transition-all duration-[6000ms] ease-linear"
              style={{
                width: isActive ? '100%' : '0%',
              }}
            />
          </div>
        )}
      </div>

      {/* 이미지 플레이스홀더 영역 (향후 추가 예정) */}
      <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center opacity-50">
        <span className="text-2xl">{getSlideIcon(slide.id)}</span>
      </div>
    </div>
  );
};
