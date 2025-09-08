import React from 'react';
import { SupportedLanguage } from '@/shared/utils/languageUtils';
import { getTranslationData } from '@/shared/utils/translationUtils';

interface CareerStaticContentProps {
  lang: SupportedLanguage;
}

/**
 * Career 페이지용 SEO 최적화 정적 콘텐츠
 * 서버 사이드에서 렌더링되어 검색 엔진이 즉시 인덱싱할 수 있는 콘텐츠
 */
const CareerStaticContent: React.FC<CareerStaticContentProps> = ({ lang }) => {
  const t = getTranslationData(lang);
  const projects = t.career?.projects || [];
  
  return (
    <div className="sr-only">
      {/* SEO용 숨겨진 콘텐츠 - 검색 엔진만 읽음 */}
      
      {/* 페이지 제목 및 설명 */}
      <h1>
        {lang === 'ko' 
          ? '심민섭 - 주요 프로젝트 | 프론트엔드 개발자' 
          : 'MinSeob Shim - Major Projects | Frontend Developer'
        }
      </h1>
      
      <p>
        {lang === 'ko'
          ? '다양한 프론트엔드 프로젝트 경험과 성과를 소개합니다. React, TypeScript를 활용한 실무 프로젝트들을 확인해보세요.'
          : 'Discover my diverse frontend project experiences and achievements. Check out real-world projects built with React and TypeScript.'
        }
      </p>

      {/* 프로젝트 목록 */}
      <div>
        <h2>
          {lang === 'ko' ? '주요 프로젝트' : 'Major Projects'}
        </h2>
        
        {projects.map((project: any, index: number) => (
          <article key={project.id || index}>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <p>
              {lang === 'ko' ? '기간:' : 'Period:'} {project.period}
            </p>
            <p>
              {lang === 'ko' ? '역할:' : 'Role:'} {project.role}
            </p>
            <p>
              {lang === 'ko' ? '설명:' : 'Description:'} {project.description}
            </p>
            
            {/* 기술 스택 */}
            {project.technologies && (
              <div>
                <h4>
                  {lang === 'ko' ? '사용 기술:' : 'Technologies:'}
                </h4>
                <ul>
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* 성과 */}
            {project.achievements && (
              <div>
                <h4>
                  {lang === 'ko' ? '주요 성과:' : 'Key Achievements:'}
                </h4>
                <ul>
                  {project.achievements.map((achievement: string, achIndex: number) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
      
      {/* 기술 키워드 */}
      <div>
        <h2>
          {lang === 'ko' ? '주요 기술' : 'Key Technologies'}
        </h2>
        <p>
          React, TypeScript, Next.js, React Native, JavaScript, CSS, HTML, 
          Zustand, TailwindCSS, GraphQL, REST API, Git, GitHub
        </p>
      </div>
    </div>
  );
};

export default CareerStaticContent;
