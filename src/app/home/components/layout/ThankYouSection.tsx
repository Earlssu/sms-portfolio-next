import React from 'react';
import { SupportedLanguage } from '@/shared/utils/languageUtils';
import { getHomeData } from '@/shared/utils/translationUtils';
import { useBackgroundStore } from '@/shared/stores';
import { formatContent } from '@/shared/utils/contentFormatter';
import { CatCarousel } from '@/app/home/components/layout/CatCarousel';

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

type ThankYouSectionProps =
  | ThankYouSectionServerProps
  | ThankYouSectionClientProps;

/**
 * 감사 인사 섹션
 * 서버 사이드와 클라이언트 사이드 모두 지원
 *
 * @param props.mode - 'server' (SSR) 또는 'client' (CSR)
 * @param props.lang - 언어 코드 (server 모드에서 사용)
 * @param props.t - useTranslation t 함수 (client 모드에서 사용)
 */
export const ThankYouSection: React.FC<ThankYouSectionProps> = (props) => {
  // React Hooks 규칙을 준수하여 항상 호출, 서버 사이드에서는 결과만 사용하지 않음
  const backgroundState = useBackgroundStore((state) => state.isDarkMode);
  const isDarkMode = props.mode === 'client' ? backgroundState : false;

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

  const formattedMoreInfo = formatContent(moreInfo);

  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* 다크모드는 투명 배경으로 글로벌 다크 배경 활용 */}
      {!isDarkMode && (
        <div
          className="absolute inset-0 transition-all duration-2000 ease-out bg-gradient-to-br from-gray-50/90 via-white/95 to-gray-100/90 opacity-100"
          style={{
            background:
              'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(241, 245, 249, 0.95) 100%)',
          }}
        />
      )}

      <div className="text-center relative z-10 animate-in fade-in duration-1000 slide-in-from-bottom-8 flex flex-col gap-6">
        <h2
          className={`
          text-4xl font-bold mb-4 transition-colors duration-500
          ${isDarkMode ? 'text-white' : 'text-primary'}
        `}
        >
          {thankYou}
        </h2>

        {/* 고양이 캐러셀 */}
        <CatCarousel isDarkMode={isDarkMode} />

        {formattedMoreInfo.map((sentence, sentenceIndex) => (
          <p
            key={sentenceIndex}
            className={`
          transition-colors duration-500
          ${isDarkMode ? 'text-gray-300' : 'text-secondary'}
        `}
          >
            {sentence}
          </p>
        ))}
      </div>
    </section>
  );
};
