'use client';

import {
  getTraitTabContentKey,
  getTraitTranslationKey,
} from '@/app/home/constants/traitData';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TabButton, TabContent, TraitCard } from '@/app/home/components';

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
  
  const title = t(getTraitTranslationKey(traitKey as any, 'title'));
  const detail = t(getTraitTranslationKey(traitKey as any, 'detail'));
  const skills = t(getTraitTranslationKey(traitKey as any, 'skills'), {
    returnObjects: true,
  }) as unknown as string[];
  const tabs = t(getTraitTranslationKey(traitKey as any, 'tabs'), {
    returnObjects: true,
  }) as unknown as string[];

  const [currentTab, setCurrentTab] = useState(0);

  // 탭 콘텐츠 가져오기
  const getTabContent = (tabIndex: number) => {
    return t(getTraitTabContentKey(traitKey as any, tabIndex), {
      returnObjects: true,
    }) as unknown as {
      sections: Array<{ title: string; content: string }>;
      contact?: { email: string; github: string; blog: string };
    };
  };

  const cardClassName = `transition-all duration-1000 ease-out ${
    isExpanded ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
  }`;

  return (
    <section className="min-h-screen flex items-center justify-center px-10 relative">
      <div className="max-w-screen-2xl mx-auto w-full h-screen flex items-center justify-center">
        <TraitCard
          title={title}
          className={cardClassName}
          isExpanded={isExpanded}
        >
          {index === 0 ? (
            <div className={'flex flex-col h-fit gap-4'}>
              <div className={'flex flex-wrap gap-3 py-2 justify-center'}>
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

              <div className="transition-all duration-300 ease-in-out">
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
          ) : (
            <div className="mt-4 space-y-3 animate__animated animate__fadeIn">
              <p className="text-secondary text-sm leading-relaxed">{detail}</p>
              <div className="flex flex-wrap gap-2">
                {skills &&
                  skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary text-quaternary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          )}
        </TraitCard>
      </div>
    </section>
  );
};
