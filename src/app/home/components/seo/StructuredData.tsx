import React from 'react';
import {
  DEFAULT_LANGUAGE,
  JOB_TITLE_MAP,
  PERSON_NAME_MAP,
  SupportedLanguage,
} from '@/shared/utils/languageUtils';
import {
  getTraitsData,
  getTranslationData,
} from '@/shared/utils/translationUtils';

interface StructuredDataProps {
  lang?: SupportedLanguage;
}

/**
 * 기존 i18n JSON 기반 JSON-LD 구조화 데이터 컴포넌트
 * SEO를 위한 구조화된 데이터 제공
 */
export const StructuredData: React.FC<StructuredDataProps> = ({
  lang = DEFAULT_LANGUAGE,
}) => {
  const t = getTranslationData(lang);
  const traits = getTraitsData(lang);

  // 모든 trait 스킬을 하나의 배열로 집계
  const allSkills = Object.values(traits).flatMap((trait) => trait.skills);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON_NAME_MAP[lang],
    jobTitle: JOB_TITLE_MAP[lang],
    description: `${t.hero} ${t.heroDesc02}`,
    url: 'https://yourportfolio.com',
    knowsAbout: [
      'React',
      'TypeScript',
      'Next.js',
      'JavaScript',
      'Frontend Development',
      'User Experience',
      'Web Development',
    ],
    skills: allSkills,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: lang === 'en' ? 'Australian University' : '호주 대학교',
    },
    nationality: lang === 'en' ? 'South Korean' : '대한민국',
    workLocation: {
      '@type': 'Place',
      name: lang === 'en' ? 'South Korea' : '대한민국',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};
