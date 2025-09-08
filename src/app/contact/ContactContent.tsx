'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';
import GlobalCursor from '@/shared/components/GlobalCursor';
import I18nProvider from '@/shared/components/I18nProvider';

const ContactContentInner = () => {
  const { t } = useTranslation();
  const { setCurrentPage } = useBackgroundStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setCurrentPage('contact');
    
    return () => {
      setCurrentPage(null);
    };
  }, [setCurrentPage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 이메일 전송 로직 (나중에 구현)
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)',
      }}
    >
      {/* 미묘한 격자 패턴 배경 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* 페이지 제목 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* 연락처 정보 */}
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl font-bold text-white mb-6">{t('contact.contactInfo.title')}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-300 text-xl">📧</span>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{t('contact.contactInfo.email.label')}</p>
                        <a 
                          href={`mailto:${t('contact.contactInfo.email.value')}`}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          {t('contact.contactInfo.email.value')}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-300 text-xl">💼</span>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{t('contact.contactInfo.github.label')}</p>
                        <a 
                          href="https://github.com/Earlssu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-300 transition-colors"
                        >
                          {t('contact.contactInfo.github.value')}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-300 text-xl">📝</span>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">{t('contact.contactInfo.blog.label')}</p>
                        <a 
                          href="https://code-in-law.tistory.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-green-300 transition-colors"
                        >
                          {t('contact.contactInfo.blog.value')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 연락 폼 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">{t('contact.contactForm.title')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2">
                      {t('contact.contactForm.name.label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                      placeholder={t('contact.contactForm.name.placeholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                      {t('contact.contactForm.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                      placeholder={t('contact.contactForm.email.placeholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                      {t('contact.contactForm.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none"
                      placeholder={t('contact.contactForm.message.placeholder')}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {t('contact.contactForm.submit')}
                  </button>
                </form>
              </div>

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
