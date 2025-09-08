'use client';

import React, { useEffect } from 'react';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';
import GlobalCursor from '@/shared/components/GlobalCursor';
import I18nProvider from '@/shared/components/I18nProvider';
import ContactBackground from '@/app/contact/components/ContactBackground';
import ContactHeader from '@/app/contact/components/ContactHeader';
import ContactInfo from '@/app/contact/components/ContactInfo';
import ContactForm from '@/app/contact/components/ContactForm';

const ContactContentInner = () => {
  const { setCurrentPage } = useBackgroundStore();

  useEffect(() => {
    setCurrentPage('contact');

    return () => {
      setCurrentPage(null);
    };
  }, [setCurrentPage]);

  return (
    <div className="min-h-screen w-full relative">
      {/* 배경 */}
      <ContactBackground />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <ContactHeader />

          {/* 콘텐츠 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <ContactInfo />

            {/* 연락 폼 */}
            <ContactForm />
          </div>
        </div>
      </div>

      <GlobalCursor />
    </div>
  );
};

const ContactContent = () => {
  return (
    <I18nProvider>
      <ContactContentInner />
    </I18nProvider>
  );
};

export default ContactContent;
