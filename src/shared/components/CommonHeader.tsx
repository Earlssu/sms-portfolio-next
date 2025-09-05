'use client';

import LanguageToggle from '@/shared/components/LanguageToggle';
import { NotionIcon } from '@/shared/components/icons';

const CommonHeader = () => {
  return (
    <div className="fixed right-0 z-20 flex gap-4 px-4 pt-2">
      <a
        href={
          'https://fire-warrior-ca2.notion.site/MinSeob-Shim-6004fbc72ef74bc994cea07bf1e11f7e?source=copy_link'
        }
        target={'_blank'}
        className={'flex items-center gap-2'}
      >
        <NotionIcon />
        <p className={'text-sm'}>이력서 보기</p>
      </a>
      <LanguageToggle />
    </div>
  );
};

export default CommonHeader;
