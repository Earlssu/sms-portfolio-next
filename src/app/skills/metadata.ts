/**
 * Skills 페이지 메타데이터 설정
 * shared/utils/metadataUtils를 활용한 재사용 가능한 메타데이터
 */

import { createPageMetadata } from '@/shared/utils/metadataUtils';

export const generateSkillsMetadata = createPageMetadata({
  titleTemplate: {
    ko: '심민섭 - 기술 스택 | 프론트엔드 개발자',
    en: 'MinSeob Shim - Tech Stack | Frontend Developer'
  },
  descriptionTemplate: {
    ko: 'React, TypeScript, Next.js 등 다양한 프론트엔드 기술을 활용한 개발 경험과 노하우를 소개합니다.',
    en: 'Explore my development experience and expertise with various frontend technologies including React, TypeScript, and Next.js.'
  },
  keywords: {
    ko: [
      '기술 스택',
      '프론트엔드',
      'React',
      'TypeScript',
      'Next.js',
      '웹 개발',
      '심민섭',
      '개발 경험'
    ],
    en: [
      'Tech Stack',
      'Frontend',
      'React',
      'TypeScript',
      'Next.js',
      'Web Development',
      'MinSeob Shim',
      'Development Experience'
    ]
  }
});
