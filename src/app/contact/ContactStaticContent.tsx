import React from 'react';
import { SupportedLanguage } from '@/shared/utils/languageUtils';

interface ContactStaticContentProps {
  lang: SupportedLanguage;
}

/**
 * Contact 페이지용 SEO 최적화 정적 콘텐츠
 * 연락처 정보를 검색 엔진이 즉시 인덱싱할 수 있도록 제공
 */
const ContactStaticContent: React.FC<ContactStaticContentProps> = ({ lang }) => {
  return (
    <div className="sr-only">
      {/* SEO용 숨겨진 콘텐츠 - 검색 엔진만 읽음 */}
      
      {/* 페이지 제목 및 설명 */}
      <h1>
        {lang === 'ko' 
          ? '심민섭 - 연락처 | 프론트엔드 개발자' 
          : 'MinSeob Shim - Contact | Frontend Developer'
        }
      </h1>
      
      <p>
        {lang === 'ko'
          ? '프로젝트 문의나 협업 제안이 있으시면 언제든 연락해 주세요. 이메일, GitHub, 블로그를 통해 소통할 수 있습니다.'
          : 'Feel free to reach out for project inquiries or collaboration proposals. Connect with me via email, GitHub, or blog.'
        }
      </p>

      {/* 연락처 정보 */}
      <section>
        <h2>{lang === 'ko' ? '연락처 정보' : 'Contact Information'}</h2>
        
        <div>
          <h3>{lang === 'ko' ? '이메일' : 'Email'}</h3>
          <p>
            <a href="mailto:mshimdev@gmail.com">mshimdev@gmail.com</a>
          </p>
          <p>
            {lang === 'ko'
              ? '프로젝트 문의, 협업 제안, 기술적 질문 등 언제든 연락주세요.'
              : 'Feel free to contact for project inquiries, collaboration proposals, technical questions, etc.'
            }
          </p>
        </div>

        <div>
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/Earlssu" target="_blank" rel="noopener noreferrer">
              github.com/Earlssu
            </a>
          </p>
          <p>
            {lang === 'ko'
              ? '개발한 프로젝트들과 코드를 확인하실 수 있습니다.'
              : 'You can check my developed projects and code.'
            }
          </p>
        </div>

        <div>
          <h3>{lang === 'ko' ? '블로그' : 'Blog'}</h3>
          <p>
            <a href="https://code-in-law.tistory.com/" target="_blank" rel="noopener noreferrer">
              code-in-law.tistory.com
            </a>
          </p>
          <p>
            {lang === 'ko'
              ? '개발 경험과 기술적 인사이트를 공유하는 블로그입니다.'
              : 'Blog sharing development experiences and technical insights.'
            }
          </p>
        </div>
      </section>

      {/* 협업 관심사 */}
      <section>
        <h2>{lang === 'ko' ? '관심 있는 협업 분야' : 'Areas of Interest for Collaboration'}</h2>
        
        <ul>
          <li>
            {lang === 'ko' ? 'React/Next.js 웹 애플리케이션 개발' : 'React/Next.js web application development'}
          </li>
          <li>
            {lang === 'ko' ? 'React Native 모바일 앱 개발' : 'React Native mobile app development'}
          </li>
          <li>
            {lang === 'ko' ? 'TypeScript 기반 프론트엔드 프로젝트' : 'TypeScript-based frontend projects'}
          </li>
          <li>
            {lang === 'ko' ? 'UI/UX 개선 및 사용자 경험 최적화' : 'UI/UX improvement and user experience optimization'}
          </li>
          <li>
            {lang === 'ko' ? '프론트엔드 성능 최적화' : 'Frontend performance optimization'}
          </li>
          <li>
            {lang === 'ko' ? '오픈소스 프로젝트 기여' : 'Open source project contributions'}
          </li>
        </ul>
      </section>

      {/* 연락 시 참고사항 */}
      <section>
        <h2>{lang === 'ko' ? '연락 시 참고사항' : 'Contact Guidelines'}</h2>
        <p>
          {lang === 'ko'
            ? '프로젝트 문의 시 다음 정보를 포함해주시면 더 빠른 답변이 가능합니다:'
            : 'Including the following information in project inquiries enables faster responses:'
          }
        </p>
        <ul>
          <li>{lang === 'ko' ? '프로젝트 개요 및 목표' : 'Project overview and goals'}</li>
          <li>{lang === 'ko' ? '예상 기간 및 일정' : 'Expected duration and timeline'}</li>
          <li>{lang === 'ko' ? '사용 기술 스택' : 'Technology stack to be used'}</li>
          <li>{lang === 'ko' ? '팀 구성 및 협업 방식' : 'Team composition and collaboration method'}</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactStaticContent;
