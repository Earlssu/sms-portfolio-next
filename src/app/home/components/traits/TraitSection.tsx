'use client';

import {
  getTraitTabContentKey,
  getTraitTranslationKey,
} from '@/app/home/constants/traitData';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ContactSection,
  TabButton,
  TabContent,
  TraitCard,
} from '@/app/home/components';
import { AboutMeCarousel } from './AboutMeCarousel';
import { useBackgroundStore } from '@/shared/stores';

interface TraitSectionProps {
  traitKey: string;
  index: number;
  isExpanded: boolean;
}

export const TraitSection: React.FC<TraitSectionProps> = ({
  traitKey,
  index,
  isExpanded,
}) => {
  const { t } = useTranslation();
  const { isDarkMode } = useBackgroundStore();

  const title = t(getTraitTranslationKey(traitKey as any, 'title'));

  // aboutMe인 경우 탭이 없으므로 조건부 처리
  const tabs =
    traitKey === 'aboutMe'
      ? []
      : (t(getTraitTranslationKey(traitKey as any, 'tabs'), {
          returnObjects: true,
        }) as unknown as string[]);

  const [currentTab, setCurrentTab] = useState(0);

  // 탭 콘텐츠 가져오기
  const getTabContent = (tabIndex: number) => {
    return t(getTraitTabContentKey(traitKey as any, tabIndex), {
      returnObjects: true,
    }) as unknown as {
      sections: Array<{
        title: string;
        position?: string;
        content: string;
        detail?: Array<{ title: string; content: string }>;
      }>;
      contact?: { email: string; github: string; blog: string; resume: string };
    };
  };

  const cardClassName = `transition-all duration-1000 ease-out ${
    isExpanded ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
  }`;

  return (
    <section className="h-screen flex items-center justify-center px-10 relative">
      {/* aboutMe인 경우 전체 화면 */}
      {traitKey === 'aboutMe' ? (
        <div className="w-full h-screen relative py-16">
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10">
            <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
              {title}
            </h1>
          </div>

          <div className="w-full h-full pt-16 flex flex-col">
            <div className="flex-1">
              <AboutMeCarousel isExpanded={isExpanded} />
            </div>
            <div className="flex-shrink-0 flex justify-center items-center py-8">
              <ContactSection
                contact={
                  t('traits.aboutMe.contact', {
                    returnObjects: true,
                  }) as any
                }
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-2xl mx-auto w-full h-screen flex items-center justify-center">
          <TraitCard
            title={title}
            className={cardClassName}
            isExpanded={isExpanded}
          >
            <div className={'flex flex-col h-full'}>
              {/* 탭 버튼 영역 - 고정 */}
              <div
                className={
                  'flex flex-wrap gap-3 py-2 justify-center flex-shrink-0 mb-4'
                }
              >
                {tabs.map((tab, tabIndex) => (
                  <TabButton
                    key={tabIndex}
                    tab={tab}
                    tabIndex={tabIndex}
                    currentTab={currentTab}
                    onClick={setCurrentTab}
                  />
                ))}
              </div>

              {/* 콘텐츠 영역 - 스크롤 가능 */}
              <div className="flex-1 max-h-[65vh] overflow-y-auto transition-all duration-300 ease-in-out custom-scrollbar pr-2 pb-12">
                {tabs.map((_, tabIndex) => {
                  if (currentTab !== tabIndex) return null;

                  const content = getTabContent(tabIndex);
                  if (!content) return null;

                  return (
                    <TabContent
                      key={tabIndex}
                      tabIndex={tabIndex}
                      sections={content.sections}
                      contact={content.contact}
                    />
                  );
                })}
              </div>
            </div>
          </TraitCard>
        </div>
      )}
    </section>
  );
};
