'use client';

import LanguageToggle from '@/shared/components/LanguageToggle';

const CommonHeader = () => {
  return (
    <div className="w-full flex justify-end">
      <LanguageToggle />
    </div>
  );
};

export default CommonHeader;
