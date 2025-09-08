'use client';

import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS } from '@/shared/const/navButtonUrls';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';

const NavButtons: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();
  const { isDarkMode } = useBackgroundStore();

  // Home 페이지인지 확인
  const isHomePage = pathname === '/';

  // 모바일 NavButtons는 항상 어두운 배경이므로 항상 흰색 텍스트 사용
  // 데스크톱은 기존 로직 유지
  const shouldUseWhiteTextDesktop = isHomePage || isDarkMode;

  return (
    <Fragment>
      {/* 데스크톱 버전 - 세로 배치 */}
      <div className="hidden md:flex fixed right-4 top-14 flex-col gap-4 z-50">
        {NAV_ITEMS.map((item, idx) => (
          <Button
            key={`btn_desktop_${idx}`}
            content={t(item.key)}
            onClick={() => router.push(`/${item.url}`)}
            isWhiteText={shouldUseWhiteTextDesktop}
          />
        ))}
      </div>

      {/* 모바일 버전 - 하단 네비게이션 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-sm border-t border-white/10 safe-area-inset-bottom">
        <div className="flex justify-around items-center py-3 px-2 min-h-[60px]">
          {NAV_ITEMS.map((item, idx) => (
            <button
              key={`btn_mobile_${idx}`}
              onClick={() => router.push(`/${item.url}`)}
              className={`
                flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-lg min-w-[60px]
                transition-all duration-200 active:scale-95
                ${
                  pathname === `/${item.url}` ||
                  (pathname === '/' && item.url === 'home')
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="text-xs font-medium text-center leading-tight whitespace-nowrap">
                {t(item.key)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default NavButtons;
