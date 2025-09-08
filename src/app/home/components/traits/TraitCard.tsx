import React from 'react';
import 'animate.css';
import { ViewMoreButton } from '@/app/home/components';

interface TraitCardProps {
  title: string;
  btnPath: '/career' | '/skills';
  className?: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
}

/**
 * 홈 화면에서 사용하는 TraitCard
 * @param title 제목
 * @param btnPath 카드 최하단 영역에 있는 버튼이 이동하는 페이지 링크
 * @param className 추가적인 스타일링을 위한 className (tailwind 기반)
 * @param children 스킬셋 아래 추가 요소
 * @param isExpanded 확장 여부
 * @constructor
 */
const TraitCard: React.FC<TraitCardProps> = ({
  title,
  btnPath,
  className,
  children,
  isExpanded = false,
}) => {
  return (
    <div
      className={`
        border border-card shadow-xl ring-2 ring-card bg-card rounded-lg p-6
        transition-all duration-700 ease-out transform flex flex-col backdrop-blur-sm
        ${
          isExpanded
            ? 'max-h-[80vh] w-full max-w-screen-lg shadow-2xl ring-opacity-20'
            : 'h-32 w-80 shadow-lg ring-opacity-10'
        }
        ${className || ''}
      `}
    >
      <h2
        className={`
          font-bold transition-all duration-500 drop-shadow-sm
          ${
            isExpanded
              ? 'text-2xl text-white mb-4'
              : 'text-lg text-gray-300 mb-2'
          }
        `}
      >
        {title}
      </h2>

      <div
        className={`
        transition-all duration-500 ease-in-out overflow-hidden flex-1 min-h-0
        ${isExpanded ? 'opacity-100' : 'opacity-50 max-h-8'}
      `}
      >
        {isExpanded ? (
          <div className="h-full min-h-0">{children}</div>
        ) : (
          <p className="text-sm text-gray-400 truncate opacity-75">
            스크롤하여 자세히 보기...
          </p>
        )}
      </div>

      {/* 자세히 보기 버튼 - 항상 카드 최하단에 고정 */}
      <div className="flex-shrink-0 pt-6 mt-4 border-t border-white/10 flex justify-center">
        <ViewMoreButton
          targetPath={btnPath}
          className={`transition-all duration-700 delay-500 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        />
      </div>
    </div>
  );
};

export default TraitCard;
