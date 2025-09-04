import { getTraitTranslationKey } from '@/app/home/constants/traitData';
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
                {currentTab === 0 && (
                  <div
                    className={
                      'flex flex-col gap-8 animate__animated animate__fadeIn animate__faster'
                    }
                  >
                    <div className={'flex flex-col gap-6'}>
                      <div className={'flex flex-col gap-4'}>
                        <h3 className={'text-lg text-tertiary'}>유학생</h3>
                        <p>
                          미국 Austin College에서 컴퓨터공학을 전공하여, 기술
                          문서를 번역 없이 읽고 이해할 수 있는 역량을 갖추고
                          있습니다
                        </p>
                      </div>

                      <div className={'flex flex-col gap-4'}>
                        <h3 className={'text-lg text-tertiary'}>
                          글 쓰는 개발자
                        </h3>
                        <p>
                          새롭게 배운 지식을 글로 정리하며 소화하고, 누군가에게
                          공유하는 것을 즐기는 성격으로 블로그에 꾸준히 기록하고
                          있습니다.
                        </p>
                      </div>

                      <div className={'flex flex-col gap-4'}>
                        <h3 className={'text-lg text-tertiary'}>협업 전문가</h3>
                        <p>
                          {`긍정적인 에너지와 능동적인 커뮤니케이션을 바탕으로 한
                          협업 능력을 갖춰, 동료들로부터 '가장 협업하고 싶은
                          개발자'라는 평가를 받았습니다.`}
                        </p>
                      </div>
                    </div>

                    <div className={'flex gap-6'}>
                      <div className={'flex gap-4'}>
                        <h3 className={'text-lg text-tertiary'}>email:</h3>
                        <a>shim5505@gmail.com</a>
                      </div>

                      <div className={'flex gap-4'}>
                        <a
                          className={'text-lg text-tertiary'}
                          href={'https://github.com/earlssu'}
                          target={'_blank'}
                        >
                          GitHub
                        </a>
                      </div>

                      <div className={'flex gap-4'}>
                        <a
                          className={'text-lg text-tertiary'}
                          href={'https://code-in-law.tistory.com/'}
                          target={'_blank'}
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {currentTab === 1 && (
                  <div
                    className={
                      'flex flex-col gap-4 animate__animated animate__fadeIn animate__faster'
                    }
                  ></div>
                )}
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
