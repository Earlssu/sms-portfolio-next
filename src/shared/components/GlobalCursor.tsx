'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import './GlobalCursor.css';

interface GlobalCursorProps {
  enabled?: boolean;
}

const GlobalCursor = ({ enabled = true }: GlobalCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !enabled) return;

    // 페이지 로드 시 즉시 커서를 표시하고 현재 마우스 위치로 이동
    const initializeCursor = () => {
      const showCursors = () => {
        if (cursorRef.current && cursor2Ref.current) {
          cursorRef.current.style.opacity = '1';
          cursor2Ref.current.style.opacity = '1';
        }
      };

      // 즉시 표시
      showCursors();

      // 마우스 위치 감지를 위한 일회성 이벤트
      const handleInitialMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        if (cursor2Ref.current) {
          cursor2Ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }
        document.removeEventListener('mousemove', handleInitialMove);
      };

      document.addEventListener('mousemove', handleInitialMove, { once: true });
    };

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

    // 커서 초기화
    initializeCursor();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMounted, enabled]);

  if (!isMounted || !enabled) {
    return null;
  }

  return (
    <Fragment>
      <div ref={cursorRef} className="global-cursor" />
      <div ref={cursor2Ref} className="global-cursor global-cursor2" />
    </Fragment>
  );
};

export default GlobalCursor;
