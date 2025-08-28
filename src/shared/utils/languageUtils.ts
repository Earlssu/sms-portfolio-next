/**
 * 언어 관련 유틸리티 함수들
 * 전역에서 사용 가능한 다국어 지원 유틸리티
 * 
 * 🚀 활용 예시:
 * - /home?lang=en → 영어 페이지
 * - /skills?lang=ko → 한국어 페이지  
 * - /career?lang=en → 영어 경력 페이지
 * 
 * 📁 사용 가능한 곳:
 * - src/app/home/page.tsx ✅ (현재 사용 중)
 * - src/app/skills/page.tsx ✅ (예시 적용)
 * - src/app/career/page.tsx (추후 확장 가능)
 * - src/app/contact/page.tsx (추후 확장 가능)
 */

// 지원하는 언어 목록
export const SUPPORTED_LANGUAGES = ['ko', 'en'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

// 기본 언어
export const DEFAULT_LANGUAGE: SupportedLanguage = 'ko';

/**
 * URL 검색 파라미터에서 언어를 감지하는 함수
 * @param searchParams Next.js searchParams 객체
 * @returns 감지된 언어 코드 (기본값: 'ko')
 */
export function detectLanguage(searchParams?: {
  [key: string]: string | string[] | undefined;
}): SupportedLanguage {
  // URL 파라미터에서 언어 확인
  const langParam = searchParams?.lang;
  
  if (typeof langParam === 'string' && SUPPORTED_LANGUAGES.includes(langParam as SupportedLanguage)) {
    return langParam as SupportedLanguage;
  }

  // 기본값: 한국어
  return DEFAULT_LANGUAGE;
}

/**
 * Accept-Language 헤더에서 언어를 감지하는 함수 (추후 확장용)
 * @param acceptLanguage Accept-Language 헤더 값
 * @returns 감지된 언어 코드
 */
export function detectLanguageFromHeader(acceptLanguage?: string): SupportedLanguage {
  if (!acceptLanguage) return DEFAULT_LANGUAGE;
  
  // 간단한 Accept-Language 파싱
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .map(lang => lang.split('-')[0]); // 'en-US' -> 'en'
  
  for (const lang of languages) {
    if (SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)) {
      return lang as SupportedLanguage;
    }
  }
  
  return DEFAULT_LANGUAGE;
}

/**
 * 언어별 로케일 코드 매핑
 */
export const LOCALE_MAP: Record<SupportedLanguage, string> = {
  ko: 'ko_KR',
  en: 'en_US',
};

/**
 * 언어별 사람 이름 매핑
 */
export const PERSON_NAME_MAP: Record<SupportedLanguage, string> = {
  ko: '심민섭',
  en: 'MinSeob Shim',
};

/**
 * 언어별 직업 타이틀 매핑
 */
export const JOB_TITLE_MAP: Record<SupportedLanguage, string> = {
  ko: '프론트엔드 개발자',
  en: 'Frontend Developer',
};
