import React from 'react';

interface ThankYouSectionProps {
  t: (key: string) => string;
}

/**
 * 마지막 섹션
 * 감사인사
 * @param t useTranslation t 객체 전달
 * @constructor
 */
export const ThankYouSection: React.FC<ThankYouSectionProps> = ({ t }) => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {t('home.thankYou')}
        </h2>
        <p className="text-secondary">{t('home.moreInfo')}</p>
      </div>
    </section>
  );
};
