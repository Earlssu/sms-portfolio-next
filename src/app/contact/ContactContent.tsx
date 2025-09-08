'use client';

import React, { Fragment, useEffect } from 'react';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';
import GlobalCursor from '@/shared/components/GlobalCursor';
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
    <div className="min-h-screen w-full relative pb-20 md:pb-40 lg:pb-80 pt-12">
      {/* 배경 */}
      <ContactBackground />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto responsive-padding py-10 sm:py-16 md:py-20">
        <div className="responsive-margin">
          {/* 헤더 */}
          <ContactHeader />

          {/* 콘텐츠 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
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
    <Fragment>
      <ContactContentInner />
    </Fragment>
  );
};

export default ContactContent;
