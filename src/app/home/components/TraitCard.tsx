import React from 'react';
import 'animate.css';

interface TraitCardProps {
  title: string;
  detail: string;
  skills: string[];
  className?: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
}

/**
 * 홈 화면에서 사용하는 TraitCard
 * @param title 제목
 * @param detail 부연 설명
 * @param className 추가적인 스타일링을 위한 className (tailwind 기반)
 * @param skills 스킬셋
 * @param children 스킬셋 아래 추가 요소
 * @param isExpanded 확장 여부
 * @constructor
 */
const TraitCard: React.FC<TraitCardProps> = ({
  title,
  detail,
  className,
  skills,
  children,
  isExpanded = false,
}) => {
  return (
    <div
      className={`
        border border-card shadow-xl ring-2 ring-card bg-card rounded-lg p-6
        transition-all duration-700 ease-out transform
        ${
          isExpanded
            ? 'h-1/2 max-h-[500px] w-full max-w-2xl shadow-2xl border-primary ring-primary'
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
        transition-all duration-500 overflow-hidden
        ${isExpanded ? 'opacity-100 max-h-96' : 'opacity-50 max-h-8'}
      `}
      >
        {isExpanded ? (
          <div className="mt-4 space-y-3 animate__animated animate__fadeIn">
            <p className="text-secondary text-sm leading-relaxed">{detail}</p>
            <div className="flex flex-wrap gap-2">
              {skills &&
                skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary text-quaternary text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
            </div>
            {children}
          </div>
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
