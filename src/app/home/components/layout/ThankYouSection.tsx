import React from 'react';
import { SupportedLanguage } from '@/shared/utils/languageUtils';
import { getHomeData } from '@/shared/utils/translationUtils';

// 서버 사이드 렌더링용 props
interface ThankYouSectionServerProps {
  mode: 'server';
  lang: SupportedLanguage;
}

// 클라이언트 사이드 렌더링용 props
interface ThankYouSectionClientProps {
  mode: 'client';
  t: (key: string) => string;
}

type ThankYouSectionProps = ThankYouSectionServerProps | ThankYouSectionClientProps;

/**
 * 감사 인사 섹션
 * 서버 사이드와 클라이언트 사이드 모두 지원
 * 
 * @param props.mode - 'server' (SSR) 또는 'client' (CSR)
 * @param props.lang - 언어 코드 (server 모드에서 사용)
 * @param props.t - useTranslation t 함수 (client 모드에서 사용)
 */
export const ThankYouSection: React.FC<ThankYouSectionProps> = (props) => {
  let thankYou: string;
  let moreInfo: string;

  if (props.mode === 'server') {
    // 서버 사이드: 직접 번역 데이터 접근
    const homeData = getHomeData(props.lang);
    thankYou = homeData.thankYou;
    moreInfo = homeData.moreInfo;
  } else {
    // 클라이언트 사이드: useTranslation 훅 사용
    thankYou = props.t('home.thankYou');
    moreInfo = props.t('home.moreInfo');
  }

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {thankYou}
        </h2>
        <p className="text-secondary">{moreInfo}</p>
      </div>
    </section>
  );
};
