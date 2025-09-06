'use client';

import React from 'react';
import { useBackgroundStore } from '@/shared/stores';

export const GlobalBackgroundTransition: React.FC = () => {
  const isDarkMode = useBackgroundStore(state => state.isDarkMode);

  return (
    <>
      {/* 메인 배경 오버레이 - 부드러운 전환을 위해 더 긴 duration */}
      <div
        className={`
          fixed inset-0 z-[-1] transition-all duration-1000 ease-in-out
          ${isDarkMode 
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-black opacity-95' 
            : 'bg-transparent opacity-0'
          }
        `}
      />
      
      {/* 중간 전환 레이어 - 점진적 밝기 조절 */}
      <div
        className={`
          fixed inset-0 z-[-1] transition-all duration-1500 ease-out
          ${isDarkMode 
            ? 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 opacity-0' 
            : 'bg-gradient-to-br from-gray-100/20 to-white/40 opacity-100'
          }
        `}
      />

      {/* 파티클/별빛 효과 - 부드러운 fade out */}
      <div 
        className={`
          fixed inset-0 z-[-1] overflow-hidden pointer-events-none
          transition-opacity duration-1200 ease-out
          ${isDarkMode ? 'opacity-100' : 'opacity-0'}
        `}
      >
          {/* 별빛 효과 */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 bg-white rounded-full opacity-60
                animate-pulse
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* 더 큰 별들 */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`big-${i}`}
              className={`
                absolute w-2 h-2 bg-blue-200 rounded-full opacity-40
                animate-ping
              `}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* 흐르는 그라데이션 */}
          <div
            className={`
              absolute inset-0 opacity-20
              bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20
              animate-pulse
            `}
          />
      </div>

      {/* 가장자리 비네팅 효과 - 부드러운 전환 */}
      <div
        className={`
          fixed inset-0 z-[-1] pointer-events-none
          bg-gradient-radial from-transparent via-transparent to-black/30
          transition-opacity duration-1000 ease-in-out
          ${isDarkMode ? 'opacity-100' : 'opacity-0'}
        `}
      />

    </>
  );
};
