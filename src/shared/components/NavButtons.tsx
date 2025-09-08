'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { useRouter, usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/shared/const/navButtonUrls';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';

const NavButtons: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();
  const { isDarkMode } = useBackgroundStore();

  // Home 페이지인지 확인
  const isHomePage = pathname === '/';
  
  // Home 페이지에서는 항상 흰색 텍스트, 다른 페이지에서는 배경에 따라 결정
  const shouldUseWhiteText = isHomePage || isDarkMode;

  return (
    <>
      {/* 데스크톱 버전 - 세로 배치 */}
      <div className="hidden md:flex fixed right-4 top-14 flex-col gap-4 z-50">
        {NAV_ITEMS.map((item, idx) => (
          <Button
            key={`btn_desktop_${idx}`}
            content={t(item.key)}
            onClick={() => router.push(`/${item.url}`)}
            isWhiteText={shouldUseWhiteText}
          />
        ))}
      </div>

      {/* 모바일 버전 - 하단 네비게이션 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="flex justify-around items-center py-2 px-4">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={`btn_mobile_${idx}`}
              onClick={() => router.push(`/${item.url}`)}
              className={`
                flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg
                transition-all duration-200 active:scale-95
                ${pathname === `/${item.url}` || (pathname === '/' && item.url === '') 
                  ? 'bg-white/20 text-white' 
                  : shouldUseWhiteText ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-black/70 hover:text-black hover:bg-black/10'
                }
              `}
            >
              <span className="text-xs font-medium text-center leading-tight">
                {t(item.key)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavButtons;
