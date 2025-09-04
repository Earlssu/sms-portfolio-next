import { getTraitTranslationKey, getTraitTabContentKey } from '@/app/home/constants/traitData';
import React, { useState } from 'react';
import TraitCard from '@/app/home/components/TraitCard';

interface TraitSectionProps {
  traitKey: string;
  index: number;
  isExpanded: boolean;
  t: (key: string, options?: any) => string;
}

export const TraitSection: React.FC<TraitSectionProps> = ({
  traitKey,
  index,
  isExpanded,
  t,
}) => {
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
    const tabContent = t(getTraitTabContentKey(traitKey as any, tabIndex), {
      returnObjects: true,
    }) as unknown as {
      sections: Array<{ title: string; content: string }>;
      contact?: { email: string; github: string; blog: string };
    };
    return tabContent;
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
                  <span
                    key={tabIndex}
                    className={`
                    px-6 py-2 flex items-center justify-center 
                    border rounded-lg cursor-pointer
                    tab-transition
                    ${
                      currentTab === tabIndex
                        ? 'tab-active bg-primary text-quaternary border-primary font-medium'
                        : 'border-tertiary text-tertiary hover:border-secondary-hover hover:text-secondary-hover hover:bg-card-hover'
                    }
                  `}
                    onClick={() => setCurrentTab(tabIndex)}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className="transition-all duration-300 ease-in-out">
                {tabs.map((_, tabIndex) => {
                  if (currentTab !== tabIndex) return null;
                  
                  const tabContent = getTabContent(tabIndex);
                  if (!tabContent) return null;

                  return (
                    <div
                      key={tabIndex}
                      className={
                        'flex flex-col gap-8 animate__animated animate__fadeIn animate__faster'
                      }
                    >
                      <div className={'flex flex-col gap-6'}>
                        {tabContent.sections?.map((section, sectionIndex) => (
                          <div key={sectionIndex} className={'flex flex-col gap-4'}>
                            <h3 className={'text-lg text-tertiary'}>{section.title}</h3>
                            <p>{section.content}</p>
                          </div>
                        ))}
                      </div>

                      {tabContent.contact && (
                        <div className={'flex gap-6'}>
                          <div className={'flex gap-4'}>
                            <h3 className={'text-lg text-tertiary'}>email:</h3>
                            <a>{tabContent.contact.email}</a>
                          </div>

                          <div className={'flex gap-4'}>
                            <a
                              className={'text-lg text-tertiary'}
                              href={tabContent.contact.github}
                              target={'_blank'}
                            >
                              GitHub
                            </a>
                          </div>

                          <div className={'flex gap-4'}>
                            <a
                              className={'text-lg text-tertiary'}
                              href={tabContent.contact.blog}
                              target={'_blank'}
                            >
                              Blog
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
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
