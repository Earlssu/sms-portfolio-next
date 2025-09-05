import React from 'react';
import 'animate.css';

interface TraitCardProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
}

/**
 * 홈 화면에서 사용하는 TraitCard
 * @param title 제목
 * @param className 추가적인 스타일링을 위한 className (tailwind 기반)
 * @param children 스킬셋 아래 추가 요소
 * @param isExpanded 확장 여부
 * @constructor
 */
const TraitCard: React.FC<TraitCardProps> = ({
  title,
  className,
  children,
  isExpanded = false,
}) => {
  return (
    <div
      className={`
        border border-card shadow-xl ring-2 ring-card bg-card rounded-lg p-6
        transition-all duration-700 ease-out transform flex flex-col
        ${
          isExpanded
            ? 'max-h-[80vh] w-full max-w-screen-lg shadow-2xl'
            : 'h-32 w-80 shadow-lg'
        }
        ${className || ''}
      `}
    >
      <h2
        className={`
          font-bold transition-all duration-500
          ${
            isExpanded
              ? 'text-2xl text-primary mb-4'
              : 'text-lg text-tertiary mb-2'
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
          <p className="text-sm text-gray-500 truncate">
            스크롤하여 자세히 보기...
          </p>
        )}
      </div>
    </div>
  );
};

export default TraitCard;
