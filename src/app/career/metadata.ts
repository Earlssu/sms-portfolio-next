/**
 * Career 페이지 메타데이터 설정
 * shared/utils/metadataUtils를 활용한 재사용 가능한 메타데이터
 */

import { createPageMetadata } from '@/shared/utils/metadataUtils';

export const generateCareerMetadata = createPageMetadata({
  titleTemplate: {
    ko: '주요 프로젝트 | 심민섭',
    en: 'Major Projects | MinSeob Shim'
  },
  descriptionTemplate: {
    ko: '다양한 프론트엔드 프로젝트 경험과 성과를 소개합니다. React, TypeScript를 활용한 실무 프로젝트들을 확인해보세요.',
    en: 'Discover my diverse frontend project experiences and achievements. Check out real-world projects built with React and TypeScript.'
  },
  keywords: {
    ko: [
      '프로젝트',
      '경력',
      '포트폴리오',
      'React',
      'TypeScript',
      '프론트엔드',
      '심민섭',
      '개발 경험'
    ],
    en: [
      'Projects',
      'Career',
      'Portfolio',
      'React',
      'TypeScript',
      'Frontend',
      'MinSeob Shim',
      'Development Experience'
    ]
  }
});
