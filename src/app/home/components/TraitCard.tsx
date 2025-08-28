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
