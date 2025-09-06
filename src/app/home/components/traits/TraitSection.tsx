'use client';

import { ContactInfo, TabContentData, TraitKey } from '@/app/home/types';
import {
  getTraitTabContentKey,
  getTraitTranslationKey,
} from '@/app/home/utils';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AboutMeCarousel,
  StarlightBackground,
  TabButton,
  TabContent,
  TraitCard,
} from '@/app/home/components';

interface TraitSectionProps {
  traitKey: TraitKey;
  index: number;
  isExpanded: boolean;
}

export const TraitSection: React.FC<TraitSectionProps> = ({
  traitKey,
  index,
  isExpanded,
}) => {
  const { t } = useTranslation();

  const title = t(getTraitTranslationKey(traitKey, 'title')) as string;
  const contact = t('traits.aboutMe.contact', {
    returnObjects: true,
  }) as ContactInfo;

  // aboutMe인 경우 탭이 없으므로 조건부 처리
  const tabs =
    traitKey === 'aboutMe'
      ? []
      : (t(getTraitTranslationKey(traitKey, 'tabs'), {
          returnObjects: true,
        }) as string[]);

  const [currentTab, setCurrentTab] = useState(0);

  // 탭 콘텐츠 가져오기
  const getTabContent = (tabIndex: number): TabContentData => {
    return t(getTraitTabContentKey(traitKey, tabIndex), {
      returnObjects: true,
    }) as TabContentData;
  };

  const cardClassName = `transition-all duration-1000 ease-out ${
    isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`;

  return (
    <section className="h-screen flex items-center justify-center px-10 relative">
      <div className="max-w-screen-2xl mx-auto w-full h-screen flex items-center justify-center relative">
        {/* 모든 섹션에 별빛 테마 배경 적용 */}
        <StarlightBackground
          isExpanded={isExpanded}
          starCount={traitKey === 'aboutMe' ? 25 : 15}
          bigStarCount={traitKey === 'aboutMe' ? 6 : 3}
          className={
            traitKey === 'aboutMe'
              ? 'absolute inset-4 rounded-3xl'
              : 'absolute inset-0 rounded-2xl'
          }
        />

        {/* aboutMe인 경우 캐러셀 레이아웃 */}
        {traitKey === 'aboutMe' ? (
          <div className="w-full h-full relative py-16">
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
              <h1
                className={`text-4xl font-bold text-white text-center drop-shadow-lg transition-all duration-700 ${
                  isExpanded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {title}
              </h1>
            </div>

            <div
              className={`w-full h-full pt-16 relative z-10 transition-all duration-700 ${
                isExpanded
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <AboutMeCarousel
                isExpanded={isExpanded}
                contact={
                  contact && typeof contact === 'object' ? contact : undefined
                }
              />
            </div>
          </div>
        ) : (
          /* projects, techStack인 경우 카드 레이아웃 */
          <TraitCard
            title={title}
            className={cardClassName}
            isExpanded={isExpanded}
          >
            <div className={'flex flex-col h-full relative z-10'}>
              {/* 탭 버튼 영역 */}
              <div className="flex flex-wrap gap-3 py-3 justify-center flex-shrink-0 mb-6">
                {tabs?.map((tab: string, tabIndex: number) => (
                  <TabButton
                    key={tabIndex}
                    tab={tab}
                    tabIndex={tabIndex}
                    currentTab={currentTab}
                    onClick={setCurrentTab}
                  />
                ))}
              </div>

              {/* 콘텐츠 영역 - fade-in 애니메이션 적용 */}
              <div className="flex-1 max-h-[65vh] overflow-y-auto transition-all duration-500 ease-in-out custom-scrollbar pr-2 pb-12">
                {tabs?.map((_: string, tabIndex: number) => {
                  if (currentTab !== tabIndex) return null;

                  const content = getTabContent(tabIndex);
                  if (!content) return null;

                  return (
                    <div
                      key={tabIndex}
                      className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                    >
                      <TabContent
                        tabIndex={tabIndex}
                        sections={content.sections}
                        contact={content.contact}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </TraitCard>
        )}
      </div>
    </section>
  );
};
