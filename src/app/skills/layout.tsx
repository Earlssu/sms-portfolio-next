import React from 'react';

/**
 * Skills 페이지 레이아웃
 * 다른 페이지와 동일한 구조로 통일성 확보
 */
export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}
