import React from 'react';

interface ScrollProgressIndicatorProps {
  scrollProgress: number;
  scrollY: number;
  expandedCard: number | null;
  isClient: boolean;
}

/**
 * 스크롤 표시기 (Fixed0
 * @param scrollProgress 스크롤 진척도 (%)
 * @param scrollY Y 스크롤
 * @param expandedCard 현재 확장된 카드의 인덱스 (디버깅용)
 * @param isClient (디버깅용) window 객체 조회 시 isClient 여부
 * @constructor
 */
export const ScrollProgressIndicator: React.FC<
  ScrollProgressIndicatorProps
> = ({ scrollProgress, scrollY, expandedCard, isClient }) => (
  <div className="hidden lg:block fixed left-4 top-1/2 transform -translate-y-1/2 z-10">
    {/* 진행률 바 */}
    <div className="w-1 h-64 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="w-full bg-gradient-to-b from-quaternary to-primary transition-all duration-300 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>

    {/* 진행률 퍼센트 */}
    <div className="mt-4 text-sm text-quaternary font-mono">
      {Math.round(scrollProgress)}%
    </div>

    {/* 개발 모드 디버그 정보 */}
    {process.env.NODE_ENV === 'development' && isClient && (
      <div className="mt-4 p-2 bg-black bg-opacity-75 text-white text-xs rounded">
        <div>ScrollY: {Math.round(scrollY)}</div>
        <div>Card: {expandedCard ?? 'none'}</div>
        <div>VH: {window.innerHeight}px</div>
      </div>
    )}
  </div>
);
