import React from 'react';
import { SupportedLanguage } from '@/shared/utils/languageUtils';
import { getTranslationData } from '@/shared/utils/translationUtils';

interface SkillsStaticContentProps {
  lang: SupportedLanguage;
}

/**
 * Skills 페이지용 SEO 최적화 정적 콘텐츠
 * 기술 스택 정보를 검색 엔진이 즉시 인덱싱할 수 있도록 제공
 */
const SkillsStaticContent: React.FC<SkillsStaticContentProps> = ({ lang }) => {
  const t = getTranslationData(lang);
  
  return (
    <div className="sr-only">
      {/* SEO용 숨겨진 콘텐츠 - 검색 엔진만 읽음 */}
      
      {/* 페이지 제목 및 설명 */}
      <h1>
        {lang === 'ko' 
          ? '심민섭 - 기술 스택 | 프론트엔드 개발자' 
          : 'MinSeob Shim - Tech Stack | Frontend Developer'
        }
      </h1>
      
      <p>
        {lang === 'ko'
          ? 'React, TypeScript, Next.js 등 다양한 프론트엔드 기술을 활용한 개발 경험과 노하우를 소개합니다.'
          : 'Explore my development experience and expertise with various frontend technologies including React, TypeScript, and Next.js.'
        }
      </p>

      {/* 프론트엔드 기술 */}
      <section>
        <h2>{lang === 'ko' ? '프론트엔드 기술' : 'Frontend Technologies'}</h2>
        
        <article>
          <h3>HTML5</h3>
          <p>
            {lang === 'ko' 
              ? '웹 접근성과 시맨틱 마크업의 중요성을 인지하고 있으며, 실제 프로젝트에서 시맨틱 태그와 alt 속성 등을 활용해 사용자 경험과 접근성을 고려한 구조로 마크업을 구성한 경험이 있습니다.'
              : 'Understanding the importance of web accessibility and semantic markup, with experience structuring markup considering user experience and accessibility using semantic tags and alt attributes in real projects.'
            }
          </p>
        </article>

        <article>
          <h3>CSS3</h3>
          <p>
            {lang === 'ko'
              ? '미디어 쿼리를 활용한 반응형(mobile-first) 디자인과 CSS 애니메이션을 통해 사용자 인터랙션을 자연스럽게 표현할 수 있으며, 별도의 프레임워크 없이도 확장성 있는 스타일링이 가능합니다.'
              : 'Capable of creating responsive (mobile-first) designs using media queries and natural user interactions through CSS animations, with ability to create scalable styling without additional frameworks.'
            }
          </p>
        </article>

        <article>
          <h3>JavaScript</h3>
          <p>
            {lang === 'ko'
              ? '바닐라 JavaScript만으로 포트폴리오 웹사이트를 구축한 경험이 있으며, ES6 문법을 적극적으로 활용하고 DOM 조작, 이벤트 처리, Flexbox 등 웹 개발의 핵심 개념을 깊이 있게 이해하고 있습니다.'
              : 'Experience building portfolio websites with vanilla JavaScript, actively utilizing ES6 syntax and deep understanding of core web development concepts including DOM manipulation, event handling, and Flexbox.'
            }
          </p>
        </article>

        <article>
          <h3>React</h3>
          <p>
            {lang === 'ko'
              ? 'React의 핵심 렌더링 구조와 Fiber Architecture의 도입 배경 및 작동 원리에 대해 이해하고 있으며, 컴포넌트 기반 아키텍처의 진화 과정을 설명할 수 있습니다.'
              : 'Understanding React core rendering structure and Fiber Architecture introduction background and operating principles, with ability to explain the evolution process of component-based architecture.'
            }
          </p>
        </article>

        <article>
          <h3>TypeScript</h3>
          <p>
            {lang === 'ko'
              ? 'TypeScript 컴파일러(tsc)의 작동 원리를 이해하고 있으며, 타입 안정성과 확장성을 고려한 interface 기반의 설계에 익숙합니다.'
              : 'Understanding TypeScript compiler (tsc) operating principles and familiar with interface-based design considering type safety and scalability.'
            }
          </p>
        </article>

        <article>
          <h3>Next.js</h3>
          <p>
            {lang === 'ko'
              ? 'Next.js에 대한 지속적인 학습을 이어가고 있으며, 실제 프로젝트에서 SSR과 CSR의 차이를 이해하고 페이지 특성에 따라 적절한 렌더링 방식을 선택해 구현한 경험이 있습니다.'
              : 'Continuing learning about Next.js with experience understanding differences between SSR and CSR and implementing appropriate rendering methods based on page characteristics in real projects.'
            }
          </p>
        </article>
      </section>

      {/* 협업 도구 */}
      <section>
        <h2>{lang === 'ko' ? '개발 및 협업 도구' : 'Development and Collaboration Tools'}</h2>
        
        <article>
          <h3>Git & GitHub</h3>
          <p>
            {lang === 'ko'
              ? 'Git CLI를 활용해 브랜치 생성, 커밋, 병합 등의 작업을 능숙하게 수행할 수 있으며, Git과 GitHub의 차이점을 명확히 인지하고 있습니다.'
              : 'Proficient in performing branch creation, commits, and merges using Git CLI, with clear understanding of differences between Git and GitHub.'
            }
          </p>
        </article>

        <article>
          <h3>Vercel</h3>
          <p>
            {lang === 'ko'
              ? 'GitHub 리포지토리를 연동해 자동화 배포 파이프라인을 구성한 경험이 있으며, 커스텀 도메인 연결 및 Redirect 설정도 수행할 수 있습니다.'
              : 'Experience setting up automated deployment pipelines by connecting GitHub repositories, with ability to perform custom domain connection and redirect configuration.'
            }
          </p>
        </article>

        <article>
          <h3>Figma</h3>
          <p>
            {lang === 'ko'
              ? '디자이너와의 협업을 통해 컴포넌트 기반 디자인 시스템을 이해하고 구현할 수 있으며, 반응형 웹 디자인의 구조를 분석해 UI에 반영하는 데 익숙합니다.'
              : 'Understanding and implementing component-based design systems through collaboration with designers, familiar with analyzing responsive web design structures and reflecting them in UI.'
            }
          </p>
        </article>
      </section>
    </div>
  );
};

export default SkillsStaticContent;
