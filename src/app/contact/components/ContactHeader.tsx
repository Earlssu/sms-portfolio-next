import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
        {t('contact.title')}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
        {t('contact.subtitle')}
      </p>
    </div>
  );
};

export default ContactHeader;
