'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { NAV_ITEMS } from '@/shared/const/navButtonUrls';

const NavButtons: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="fixed right-4 top-14 flex flex-col gap-4 z-50">
      {NAV_ITEMS.map((item, idx) => (
        <Button
          key={`btn_${idx}`}
          content={t(item.key)}
          onClick={() => router.push(`/${item.url}`)}
        />
      ))}
    </div>
  );
};

export default NavButtons;
