/**
 * Contact 페이지 메타데이터 설정
 * shared/utils/metadataUtils를 활용한 재사용 가능한 메타데이터
 */

import { createPageMetadata } from '@/shared/utils/metadataUtils';

export const generateContactMetadata = createPageMetadata({
  titleTemplate: {
    ko: '심민섭 - 연락처 | 프론트엔드 개발자',
    en: 'MinSeob Shim - Contact | Frontend Developer'
  },
  descriptionTemplate: {
    ko: '프로젝트 문의나 협업 제안이 있으시면 언제든 연락해 주세요. 이메일, GitHub, 블로그를 통해 소통할 수 있습니다.',
    en: 'Feel free to reach out for project inquiries or collaboration proposals. Connect with me via email, GitHub, or blog.'
  },
  keywords: {
    ko: [
      '연락처',
      '문의',
      '협업',
      '프로젝트',
      '심민섭',
      '프론트엔드',
      '개발자',
      '이메일'
    ],
    en: [
      'Contact',
      'Inquiry',
      'Collaboration',
      'Project',
      'MinSeob Shim',
      'Frontend',
      'Developer',
      'Email'
    ]
  }
});
