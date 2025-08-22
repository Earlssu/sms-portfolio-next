'use client';

import CustomCarousel from '@/app/career/components/CustomCarousel';
import GlobalCursor from '@/shared/components/GlobalCursor';

const Career = () => {
  return (
    <div style={{ cursor: 'none' }}>
      <CustomCarousel />
      <GlobalCursor />
    </div>
  );
};

export default Career;
