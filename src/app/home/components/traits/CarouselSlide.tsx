'use client';

import React from 'react';
import { CarouselSlideData } from '@/app/home/types';

interface CarouselSlideProps {
  slide: CarouselSlideData;
  isActive: boolean;
  slideIndex: number;
  totalSlides: number;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slide,
  isActive,
  slideIndex,
}) => {
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
        h-full flex flex-col justify-start items-center text-center
        transition-all duration-700 ease-in-out overflow-y-auto custom-scrollbar
        pb-8 max-w-screen-xl mx-auto
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
    >
      {/* 배경 그라데이션 - 더 어둡고 일치하는 색상 */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br bg-transparent
          opacity-0 transition-opacity duration-1000
          ${isActive ? 'opacity-40' : 'opacity-0'}
        `}
      />

      {/* 상단 고정 영역: 아이콘, 제목, 부제목 */}
      <div className="relative z-10 flex-shrink-0 text-center px-4 pt-4 pb-2 flex flex-col gap-4">
        {/* 아이콘 */}
        <div className="text-5xl md:text-6xl mb-4 animate-pulse">
          {getSlideIcon(slide.id)}
        </div>

        {/* 제목 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
          {slide.title}
        </h1>

        {/* 부제목 */}
        {slide.subtitle && (
          <h2 className="text-xl md:text-2xl lg:text-3xl text-quaternary mb-4 font-light">
            {slide.subtitle}
          </h2>
        )}
      </div>

      {/* 스크롤 가능한 콘텐츠 영역 */}
      <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar px-4 pb-4 w-3/4">
        <div className="max-w-4xl mx-auto">
          {/* 메인 콘텐츠 */}
          <div className="space-y-6">
            {/* 하이라이트 텍스트 */}
            {slide.highlight && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 my-6">
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                  {slide.highlight}
                </p>
              </div>
            )}

            {/* 기본 콘텐츠 */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {slide.content}
            </p>

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
                          <div
                            key={achIndex}
                            className="flex items-start gap-2"
                          >
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
          </div>
        </div>
      </div>

      {/* 이미지 플레이스홀더 영역 (향후 추가 예정) */}
      {/*<div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center opacity-50">*/}
      {/*  <span className="text-2xl">{getSlideIcon(slide.id)}</span>*/}
      {/*</div>*/}
    </div>
  );
};
