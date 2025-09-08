import React from 'react';
import { SupportedLanguage, PERSON_NAME_MAP } from '@/shared/utils/languageUtils';

interface ContactStructuredDataProps {
  lang: SupportedLanguage;
}

/**
 * Contact 페이지용 JSON-LD 구조화 데이터
 * 연락처 정보를 검색 엔진이 이해할 수 있도록 구조화된 데이터 제공
 */
const ContactStructuredData: React.FC<ContactStructuredDataProps> = ({ lang }) => {
  const personName = PERSON_NAME_MAP[lang];
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    jobTitle: lang === 'ko' ? '프론트엔드 개발자' : 'Frontend Developer',
    url: 'https://minseobshim.vercel.app/contact',
    email: 'mshimdev@gmail.com',
    sameAs: [
      'https://github.com/Earlssu',
      'https://code-in-law.tistory.com/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'mshimdev@gmail.com',
        availableLanguage: ['Korean', 'English']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KR',
      addressRegion: lang === 'ko' ? '대한민국' : 'South Korea'
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: lang === 'ko' ? '네이버 부스트캠프' : 'Naver BootCamp'
      }
    ],
    worksFor: {
      '@type': 'Organization', 
      name: '주식회사 블라스트',
      description: lang === 'ko'
        ? '프론트엔드 개발자로 다양한 웹 앱 서비스 개발'
        : 'Frontend developer working on various web app services'
    },
    seeks: {
      '@type': 'Demand',
      name: lang === 'ko' ? '프로젝트 협업 및 문의' : 'Project Collaboration and Inquiries',
      description: lang === 'ko'
        ? '프론트엔드 개발 프로젝트, 협업 제안, 기술 문의를 환영합니다'
        : 'Welcome frontend development projects, collaboration proposals, and technical inquiries'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
};

export default ContactStructuredData;
