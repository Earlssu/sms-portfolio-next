'use client';

import { useEffect } from 'react';
import CustomCarousel from '@/app/career/components/CustomCarousel';
import GlobalCursor from '@/shared/components/GlobalCursor';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';

const Career = () => {
  const { setCurrentPage } = useBackgroundStore();

  useEffect(() => {
    setCurrentPage('career');

    // 컴포넌트 언마운트 시 정리
    return () => {
      setCurrentPage(null);
    };
  }, [setCurrentPage]);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          'linear-gradient(135deg, #2a2a2a 0%, #353535 25%, #1a1a1a 50%, #282828 75%, #1f1f1f 100%)',
      }}
    >
      <CustomCarousel />
      <GlobalCursor />
    </div>
  );
};

export default Career;
