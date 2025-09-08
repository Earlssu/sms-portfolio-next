'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

interface ViewMoreButtonProps {
  targetPath: '/career' | '/skills';
  className?: string;
}

export const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  targetPath,
  className = '',
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleClick = () => {
    router.push(targetPath);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group relative inline-flex items-center justify-center gap-2
        px-6 py-3 
        bg-gradient-to-r from-blue-400/20 to-purple-400/20 
        hover:from-blue-500/30 hover:to-purple-500/30
        border border-white/20 hover:border-white/40
        backdrop-blur-sm
        rounded-lg
        text-white font-medium
        transition-all duration-300 ease-out
        transform hover:scale-105 hover:-translate-y-1
        hover:shadow-lg hover:shadow-blue-500/25
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent
        ${className}
      `}
      type="button"
    >
      {/* 버튼 텍스트 */}
      <span className="relative z-10 text-sm transition-colors duration-300">
        {t('viewMore')}
      </span>

      {/* 화살표 아이콘 */}
      <span className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>

      {/* 호버 시 글로우 효과 */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
    </button>
  );
};

export default ViewMoreButton;
