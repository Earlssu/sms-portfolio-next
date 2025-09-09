'use client';

import React, { Fragment, useEffect, useState } from 'react';

interface StarlightBackgroundProps {
  isExpanded: boolean;
  starCount?: number;
  bigStarCount?: number;
  className?: string;
}

interface StarProps {
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export const StarlightBackground: React.FC<StarlightBackgroundProps> = ({
  isExpanded,
  starCount = 15,
  bigStarCount = 3,
  className = 'absolute inset-0 rounded-2xl',
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [bigStars, setBigStars] = useState<StarProps[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // 작은 별들 생성
    const newStars = Array.from({ length: starCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2,
    }));

    // 큰 별들 생성
    const newBigStars = Array.from({ length: bigStarCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: 3 + Math.random() * 2,
    }));

    setStars(newStars);
    setBigStars(newBigStars);
  }, [starCount, bigStarCount]);

  if (!isExpanded || !isClient) return null;

  return (
    <Fragment>
      {/* 메인 glassmorphism 배경 */}
      <div
        className={`${className} backdrop-blur-md border border-white/10 transition-all duration-700 ease-in-out 
          w-[calc(100%-12px)] lg:w-auto mx-auto bg-gradient-to-br from-white/5 to-white/2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]`}
      />

      {/* 별빛 파티클 효과 */}
      <div className={`${className} overflow-hidden pointer-events-none`}>
        {/* 작은 별들 */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        {/* 큰 별들 */}
        {bigStars.map((star, i) => (
          <div
            key={`big-${i}`}
            className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full opacity-30 animate-ping"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

        {/* 부드러운 그라데이션 오버레이 */}
        <div
          className={`absolute inset-0 opacity-10 rounded-2xl
            bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-emerald-500/30
            animate-pulse`}
          style={{
            animationDuration: '4s',
            animationDirection: 'alternate',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      </div>
    </Fragment>
  );
};
