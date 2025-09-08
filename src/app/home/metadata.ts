import {Metadata} from 'next'; // 유틸리티 함수 import
import {DEFAULT_LANGUAGE,} from '@/shared/utils/languageUtils';
import {getTranslationData} from '@/shared/utils/translationUtils';
import {createPageMetadata} from '@/shared/utils/metadataUtils';

/**
 * 홈 페이지 메타데이터 생성 함수
 * 기존 i18n JSON 데이터를 활용한 동적 메타데이터
 */
export const generateHomeMetadata = createPageMetadata({
  titleTemplate: {
    ko: '심민섭 | 프론트엔드 개발자',
    en: 'MinSeob Shim | Frontend Developer',
  },
  descriptionTemplate: {
    ko: (() => {
      const t = getTranslationData('ko');
      return `${t.hero} ${t.heroDesc02}`;
    })(),
    en: (() => {
      const t = getTranslationData('en');
      return `${t.hero} ${t.heroDesc02}`;
    })(),
  },
  keywords: {
    ko: [
      '프론트엔드 개발자',
      '심민섭',
      'React',
      'TypeScript',
      'Next.js',
      '웹 개발',
      '포트폴리오',
      '사용자 경험',
      'UX',
    ],
    en: [
      'Frontend Developer',
      'MinSeob Shim',
      'React',
      'TypeScript',
      'Next.js',
      'Web Development',
      'Portfolio',
      'User Experience',
      'UX',
    ],
  },
  siteName: {
    ko: '심민섭 포트폴리오',
    en: 'MinSeob Shim Portfolio',
  },
});

// 기본 메타데이터 (하위 호환성)
export const homeMetadata: Metadata = generateHomeMetadata(DEFAULT_LANGUAGE);
