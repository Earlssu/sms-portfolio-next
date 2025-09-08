import React, { Fragment, Suspense } from 'react';
import 'animate.css';
import { detectLanguage } from '@/shared/utils/languageUtils';
import { createGenerateMetadata } from '@/shared/utils/metadataUtils';
import {
  ClientAnimations,
  I18nStaticContent,
  LoadingScreen,
  StructuredData,
} from '@/app/home/components';
import { generateHomeMetadata } from '@/app/home/metadata';

// 모듈화된 generateMetadata 함수 사용
export const generateMetadata = createGenerateMetadata(generateHomeMetadata);

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

/**
 * 홈 페이지 - i18n 지원 SSR
 * SEO 최적화와 다국어 지원을 위해 서버 사이드 렌더링 활용
 */
export default function Home({ searchParams }: HomeProps) {
  const lang = detectLanguage(searchParams);

  return (
    <Fragment>
      {/* JSON-LD 구조화 데이터 */}
      <StructuredData lang={lang} />

      <div className="relative">
        {/* SEO를 위한 다국어 정적 콘텐츠 (서버 사이드 렌더링) */}
        <I18nStaticContent lang={lang} />

        {/* 클라이언트 애니메이션 (ThankYouSection 포함) */}
        <Suspense fallback={<LoadingScreen />}>
          <ClientAnimations />
        </Suspense>
      </div>
    </Fragment>
  );
}
