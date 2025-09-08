import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {t('contact.title')}
      </h1>
      <p className="text-lg text-white/70 max-w-2xl mx-auto">
        {t('contact.subtitle')}
      </p>
    </div>
  );
};

export default ContactHeader;
