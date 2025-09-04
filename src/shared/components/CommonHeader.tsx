'use client';

import LanguageToggle from '@/shared/components/LanguageToggle';

const CommonHeader = () => {
  return (
    <div className="fixed right-0 z-20">
      <LanguageToggle />
    </div>
  );
};

export default CommonHeader;
