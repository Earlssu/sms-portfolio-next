'use client';

import CustomCarousel from '@/app/career/components/CustomCarousel';
import GlobalCursor from '@/shared/components/GlobalCursor';

const Career = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(135deg, #2a2a2a 0%, #353535 25%, #1a1a1a 50%, #282828 75%, #1f1f1f 100%)',
      }}
    >
      <CustomCarousel />
      <GlobalCursor />
    </div>
  );
};

export default Career;
