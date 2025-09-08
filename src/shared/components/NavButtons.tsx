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
    <div className="fixed right-4 top-14 flex flex-col gap-4 z-50">
      {NAV_ITEMS.map((item, idx) => (
        <Button
          key={`btn_${idx}`}
          content={t(item.key)}
          onClick={() => router.push(`/${item.url}`)}
          isWhiteText={shouldUseWhiteText}
        />
      ))}
    </div>
  );
};

export default NavButtons;
