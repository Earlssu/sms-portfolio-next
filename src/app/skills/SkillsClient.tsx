'use client';

import { useEffect } from 'react';
import SkillDescription from '@/app/skills/SkillDescription';
import I18nProvider from '@/shared/components/I18nProvider';
import GlobalCursor from '@/shared/components/GlobalCursor';
import { useTranslation } from 'react-i18next';
import { useBackgroundStore } from '@/shared/stores/backgroundStore';
import 'animate.css';

interface SkillsClientProps {
  lang: string;
}

const SkillsClient: React.FC<SkillsClientProps> = ({ lang }) => {
  return (
    <I18nProvider>
      <SkillsContent />
    </I18nProvider>
  );
};

const SkillsContent: React.FC = () => {
  const { t } = useTranslation();
  const { setCurrentPage } = useBackgroundStore();

  useEffect(() => {
    setCurrentPage('skills');

    // 컴포넌트 언마운트 시 정리
    return () => {
      setCurrentPage(null);
    };
  }, [setCurrentPage]);

  return (
    <div
      className="min-h-screen w-full relative pb-20 md:pb-0 pt-12"
      style={{
        background:
          'linear-gradient(135deg, #2a2a2a 0%, #353535 25%, #1a1a1a 50%, #282828 75%, #1f1f1f 100%)',
      }}
    >
      {/* 별빛 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 container mx-auto responsive-padding py-10 sm:py-16 md:py-20">
        <div className="responsive-margin">
          {/* 페이지 제목 */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate__animated animate__fadeInUp">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
              {t('skills.title')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
              {t('skills.subtitle')}
            </p>
          </div>

          {/* 스킬 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 md:mb-0">
            {/* Frontend 섹션 */}
            <div
              className="animate__animated animate__fadeInLeft"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="text-blue-400">⚡</span>
                  {t('skills.sections.frontend')}
                </h2>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <SkillDescription skill={'html5'} />
                  <SkillDescription skill={'css3'} />
                  <SkillDescription skill={'javascript'} />
                  <SkillDescription skill={'react'} />
                  <SkillDescription skill={'reactNative'} />
                  <SkillDescription skill={'typescript'} />
                  <SkillDescription skill={'nextJS'} />
                  <SkillDescription skill={'zustand'} />
                  <SkillDescription skill={'mobx'} />
                  <SkillDescription skill={'redux'} />
                  <SkillDescription skill={'styledComponent'} />
                  <SkillDescription skill={'tailwind'} />
                  <SkillDescription skill={'reactQuery'} />
                </div>
              </div>
            </div>

            {/* Communication Tools 섹션 */}
            <div
              className="animate__animated animate__fadeInRight"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 sm:gap-3">
                  <span className="text-green-400">🛠️</span>
                  {t('skills.sections.collaboration')}
                </h2>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <SkillDescription skill={'git'} />
                  <SkillDescription skill={'github'} />
                  <SkillDescription skill={'githubActions'} />
                  <SkillDescription skill={'vercel'} />
                  <SkillDescription skill={'figma'} />
                  <SkillDescription skill={'notion'} />
                  <SkillDescription skill={'jira'} />
                  <SkillDescription skill={'slack'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GlobalCursor />
    </div>
  );
};

export default SkillsClient;
