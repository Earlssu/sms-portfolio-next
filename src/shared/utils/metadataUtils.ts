/**
 * 메타데이터 생성 유틸리티 함수들
 * 전역에서 사용 가능한 다국어 메타데이터 생성 유틸리티
 * 
 * 🚀 활용 예시:
 * - src/app/home/page.tsx
 * - src/app/skills/page.tsx  
 * - src/app/career/page.tsx
 * - src/app/contact/page.tsx
 */

import { Metadata } from 'next';
import { detectLanguage, SupportedLanguage } from './languageUtils';

// 페이지별 메타데이터 생성 함수 타입
export type MetadataGenerator = (lang: SupportedLanguage) => Metadata;

/**
 * 범용 generateMetadata 함수
 * URL searchParams에서 언어를 감지하고 해당 언어의 메타데이터를 생성
 * 
 * @param metadataGenerator 페이지별 메타데이터 생성 함수
 * @returns Next.js generateMetadata 함수
 */
export function createGenerateMetadata(
  metadataGenerator: MetadataGenerator
) {
  return async function generateMetadata({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined };
  }): Promise<Metadata> {
    const lang = detectLanguage(searchParams);
    return metadataGenerator(lang);
  };
}

/**
 * 간단한 페이지 메타데이터 생성 헬퍼
 * 
 * @param config 페이지별 설정
 * @returns 메타데이터 생성 함수
 */
export function createPageMetadata(config: {
  titleTemplate: { ko: string; en: string };
  descriptionTemplate: { ko: string; en: string };
  keywords: { ko: string[]; en: string[] };
  siteName?: { ko: string; en: string };
}): MetadataGenerator {
  return (lang: SupportedLanguage): Metadata => {
    const { titleTemplate, descriptionTemplate, keywords, siteName } = config;
    
    const title = titleTemplate[lang];
    const description = descriptionTemplate[lang];
    const pageKeywords = keywords[lang];
    const defaultSiteName = siteName ? siteName[lang] : (lang === 'en' ? 'MinSeob Shim Portfolio' : '심민섭 포트폴리오');
    
    return {
      title,
      description,
      keywords: pageKeywords,
      authors: [{ name: lang === 'en' ? 'MinSeob Shim' : '심민섭' }],
      creator: lang === 'en' ? 'MinSeob Shim' : '심민섭',
      openGraph: {
        title,
        description,
        type: 'website',
        locale: lang === 'en' ? 'en_US' : 'ko_KR',
        siteName: defaultSiteName,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      alternates: {
        languages: {
          'ko': '?lang=ko',
          'en': '?lang=en',
        },
      },
    };
  };
}
