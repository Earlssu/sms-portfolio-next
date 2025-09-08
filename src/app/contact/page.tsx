import React, { Fragment, Suspense } from 'react';
import { detectLanguage } from '@/shared/utils/languageUtils';
import { createGenerateMetadata } from '@/shared/utils/metadataUtils';
import { generateContactMetadata } from './metadata';
import ContactContent from '@/app/contact/ContactContent';
import ContactStructuredData from './ContactStructuredData';
import ContactStaticContent from './ContactStaticContent';

// 모듈화된 generateMetadata 함수 사용
export const generateMetadata = createGenerateMetadata(generateContactMetadata);

interface ContactProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

/**
 * Contact 페이지 - i18n 지원 SSR + SEO 최적화
 * Home 페이지와 동일한 SEO 구조 적용
 */
export default function Contact({ searchParams }: ContactProps) {
  const lang = detectLanguage(searchParams);

  return (
    <Fragment>
      {/* JSON-LD 구조화 데이터 */}
      <ContactStructuredData lang={lang} />

      <div className="relative">
        {/* SEO를 위한 다국어 정적 콘텐츠 (서버 사이드 렌더링) */}
        <ContactStaticContent lang={lang} />

        {/* 클라이언트 인터랙션 */}
        <Suspense fallback={<div className="min-h-screen bg-gray-900 animate-pulse" />}>
          <ContactContent />
        </Suspense>
      </div>
    </Fragment>
  );
}
