'use client';

import { useEffect, useRef } from 'react';
import CustomCarousel from '@/app/career/components/CustomCarousel';
import './styles.css';

const Career = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (cursor2Ref.current) {
        cursor2Ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
      if (cursor2Ref.current) {
        cursor2Ref.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
      if (cursor2Ref.current) {
        cursor2Ref.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ cursor: 'none' }}>
      <h1>Career</h1>

      <CustomCarousel />

      <div ref={cursorRef} className="cursor" />
      <div ref={cursor2Ref} className="cursor cursor2" />
    </div>
  );
};

export default Career;
