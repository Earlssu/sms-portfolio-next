import React, { Fragment, Suspense } from 'react';
import { detectLanguage } from '@/shared/utils/languageUtils';
import { createGenerateMetadata } from '@/shared/utils/metadataUtils';
import CareerStructuredData from '@/app/career/components/CareerStructuredData';
import CareerStaticContent from '@/app/career/components/CareerStaticContent';
import CareerClient from '@/app/career/CareerClient';
import { generateCareerMetadata } from '@/app/career/metadata';

// 모듈화된 generateMetadata 함수 사용
export const generateMetadata = createGenerateMetadata(generateCareerMetadata);

interface CareerProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

/**
 * Career 페이지 - i18n 지원 SSR + SEO 최적화
 * Home 페이지와 동일한 SEO 구조 적용
 */
export default function Career({ searchParams }: CareerProps) {
  const lang = detectLanguage(searchParams);

  return (
    <Fragment>
      {/* JSON-LD 구조화 데이터 */}
      <CareerStructuredData lang={lang} />

      <div className="relative">
        {/* SEO를 위한 다국어 정적 콘텐츠 (서버 사이드 렌더링) */}
        <CareerStaticContent lang={lang} />

        {/* 클라이언트 인터랙션 */}
        <Suspense
          fallback={<div className="min-h-screen bg-gray-900 animate-pulse" />}
        >
          <CareerClient />
        </Suspense>
      </div>
    </Fragment>
  );
}
