import React from 'react';
import { SupportedLanguage, PERSON_NAME_MAP } from '@/shared/utils/languageUtils';
import { getTranslationData } from '@/shared/utils/translationUtils';

interface SkillsStructuredDataProps {
  lang: SupportedLanguage;
}

/**
 * Skills 페이지용 JSON-LD 구조화 데이터
 * 기술 스택과 전문성을 검색 엔진이 이해할 수 있도록 구조화된 데이터 제공
 */
const SkillsStructuredData: React.FC<SkillsStructuredDataProps> = ({ lang }) => {
  const t = getTranslationData(lang);
  const personName = PERSON_NAME_MAP[lang];
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personName,
    jobTitle: lang === 'ko' ? '프론트엔드 개발자' : 'Frontend Developer',
    url: 'https://minseobshim.vercel.app/skills',
    sameAs: [
      'https://github.com/Earlssu',
      'https://code-in-law.tistory.com/',
    ],
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'TailwindCSS',
      'Styled Components',
      'React Native',
      'Zustand',
      'React Query',
      'Git',
      'GitHub',
      'Vercel',
      'Figma'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: lang === 'ko' ? 'React 전문 개발' : 'React Professional Development',
        description: lang === 'ko' 
          ? 'React의 핵심 렌더링 구조와 Fiber Architecture 이해'
          : 'Understanding React core rendering structure and Fiber Architecture'
      },
      {
        '@type': 'EducationalOccupationalCredential', 
        name: lang === 'ko' ? 'TypeScript 전문성' : 'TypeScript Expertise',
        description: lang === 'ko'
          ? 'TypeScript 컴파일러 작동 원리 이해 및 타입 안정성 확보'
          : 'Understanding TypeScript compiler principles and ensuring type safety'
      }
    ],
    alumniOf: {
      '@type': 'Organization',
      name: lang === 'ko' ? '네이버 부스트캠프' : 'Naver BootCamp',
      description: lang === 'ko' 
        ? 'CS 기본기 강화 과정 수료'
        : 'Completed CS fundamentals enhancement course'
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

export default SkillsStructuredData;
