import React from 'react';
import {
  DEFAULT_LANGUAGE,
  SupportedLanguage,
} from '@/shared/utils/languageUtils';
import {
  getHomeData,
  getTraitsData,
  getTranslationData,
} from '@/shared/utils/translationUtils';

interface I18nStaticContentProps {
  lang?: SupportedLanguage;
}

/**
 * 기존 i18n JSON 파일 기반 정적 콘텐츠 컴포넌트
 * SEO와 서버 사이드 렌더링을 위한 언어별 정적 콘텐츠
 * @param lang 언어 코드 (기본값: 'ko')
 */
export const I18nStaticContent: React.FC<I18nStaticContentProps> = ({
  lang = DEFAULT_LANGUAGE,
}) => {
  const t = getTranslationData(lang);
  const traits = getTraitsData(lang);
  const home = getHomeData(lang);

  return (
    <div className="sr-only">
      {/* SEO를 위한 숨겨진 다국어 정적 콘텐츠 */}
      <h1>{t.hero}</h1>
      <p>
        {t.heroDesc01} {t.heroDesc02}
      </p>

      <section>
        <h2>
          {lang === 'en' ? 'Developer Characteristics' : '개발자로서의 특성'}
        </h2>

        {Object.entries(traits).map(([key, trait]) => (
          <article key={key}>
            <h3>{trait.title}</h3>
          </article>
        ))}

        <footer>
          <p>{home.thankYou}</p>
          <p>{home.moreInfo}</p>
        </footer>
      </section>
    </div>
  );
};
