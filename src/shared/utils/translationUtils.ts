/**
 * 번역 데이터 접근 유틸리티 함수들
 * 전역에서 사용 가능한 다국어 번역 데이터 접근 유틸리티
 * 
 * 🌐 사용 가능한 곳:
 * - 서버 사이드: page.tsx, layout.tsx, metadata.ts
 * - 클라이언트 사이드: 클라이언트 컴포넌트 (대신 useTranslation 권장)
 * - 유니버설: 모든 페이지에서 공통 사용 가능
 */

// 기존 locales JSON 파일에서 직접 import
import koTranslations from '@/locales/ko/translation.json';
import enTranslations from '@/locales/en/translation.json';
import { SupportedLanguage, DEFAULT_LANGUAGE } from './languageUtils';

// 번역 데이터 타입
export type TranslationData = typeof koTranslations;

// 언어별 번역 데이터 매핑
const translations: Record<SupportedLanguage, TranslationData> = {
  ko: koTranslations,
  en: enTranslations,
};

/**
 * 언어에 따른 번역 데이터를 가져오는 함수
 * @param lang 언어 코드
 * @returns 해당 언어의 번역 데이터
 */
export function getTranslationData(lang: SupportedLanguage): TranslationData {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}

/**
 * 서버 사이드에서 안전하게 번역 데이터에 접근하는 함수
 * @param lang 언어 코드
 * @param key 번역 키 (예: 'hero', 'heroDesc01')
 * @returns 번역된 텍스트 또는 기본값
 */
export function getTranslation(lang: SupportedLanguage, key: keyof TranslationData): string {
  const t = getTranslationData(lang);
  return t[key] as string || '';
}

/**
 * 중첩된 번역 키에 접근하는 함수
 * @param lang 언어 코드
 * @param keyPath 키 경로 (예: ['home', 'thankYou'])
 * @returns 번역된 텍스트 또는 기본값
 */
export function getNestedTranslation(
  lang: SupportedLanguage, 
  keyPath: string[]
): string {
  const t = getTranslationData(lang);
  
  try {
    let value: any = t;
    for (const key of keyPath) {
      value = value[key];
    }
    return typeof value === 'string' ? value : '';
  } catch {
    return '';
  }
}

/**
 * traits 데이터에 특화된 접근 함수
 * @param lang 언어 코드
 * @returns traits 객체
 */
export function getTraitsData(lang: SupportedLanguage) {
  const t = getTranslationData(lang);
  return t.traits;
}

/**
 * home 섹션 데이터에 특화된 접근 함수
 * @param lang 언어 코드
 * @returns home 객체
 */
export function getHomeData(lang: SupportedLanguage) {
  const t = getTranslationData(lang);
  return t.home;
}

/**
 * 네비게이션 관련 번역 데이터 접근 함수
 * @param lang 언어 코드
 * @returns 네비게이션 번역 객체 { home, about, career, skills, contact }
 */
export function getNavTranslations(lang: SupportedLanguage) {
  const t = getTranslationData(lang);
  return {
    home: t.home,
    about: t.about,
    career: t.career,
    skills: t.skills,
    contact: t.contact,
  };
}

/**
 * 기술 스택 관련 번역 데이터 접근 함수 (추후 확장용)
 * @param lang 언어 코드
 * @param techKey 기술 키 (예: 'react', 'typescript')
 * @returns 해당 기술의 번역 텍스트
 */
export function getTechTranslation(lang: SupportedLanguage, techKey: string): string {
  const t = getTranslationData(lang);
  return (t as any)[techKey] || '';
}
