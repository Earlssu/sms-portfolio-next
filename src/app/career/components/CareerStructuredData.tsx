import React from 'react';
import { SupportedLanguage, PERSON_NAME_MAP } from '@/shared/utils/languageUtils';
import { getTranslationData } from '@/shared/utils/translationUtils';

interface CareerStructuredDataProps {
  lang: SupportedLanguage;
}

/**
 * Career 페이지용 JSON-LD 구조화 데이터
 * 검색 엔진이 프로젝트 경력을 더 잘 이해할 수 있도록 구조화된 데이터 제공
 */
const CareerStructuredData: React.FC<CareerStructuredDataProps> = ({ lang }) => {
  const t = getTranslationData(lang);
  const personName = PERSON_NAME_MAP[lang];
  
  // 프로젝트 데이터를 구조화
  const projects = t.career?.projects || [];
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    jobTitle: lang === 'ko' ? '프론트엔드 개발자' : 'Frontend Developer',
    url: 'https://minseobshim.vercel.app/career',
    sameAs: [
      'https://github.com/Earlssu',
      'https://code-in-law.tistory.com/',
    ],
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'Frontend Development',
      'Web Development'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: lang === 'ko' ? '프론트엔드 개발자' : 'Frontend Developer',
      description: lang === 'ko' 
        ? '다양한 프론트엔드 프로젝트 경험과 성과를 보유한 개발자'
        : 'Developer with diverse frontend project experiences and achievements',
      skills: [
        'React',
        'TypeScript', 
        'Next.js',
        'React Native',
        'JavaScript',
        'CSS',
        'HTML'
      ]
    },
    worksFor: {
      '@type': 'Organization',
      name: '주식회사 블라스트',
      description: lang === 'ko' 
        ? '다양한 도메인의 모바일 앱과 웹 서비스 개발'
        : 'Development of mobile apps and web services across various domains'
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

export default CareerStructuredData;
