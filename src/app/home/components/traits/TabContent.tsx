import React from 'react';
import { formatContent } from '@/shared/utils/contentFormatter';

interface TabContentProps {
  tabIndex: number;
  sections: Array<{
    title: string;
    position?: string;
    content: string;
    detail?: Array<{ title: string; content: string }>;
  }>;
  contact?: { email: string; github: string; blog: string; resume: string };
}

export const TabContent: React.FC<TabContentProps> = ({
  tabIndex,
  sections,
  contact,
}) => {
  return (
    <div
      key={tabIndex}
      className={
        'flex flex-col gap-8 animate__animated animate__fadeIn animate__faster'
      }
    >
      <div className={'flex flex-col gap-8'}>
        {sections?.map((section, sectionIndex) => {
          const formattedContent = formatContent(section.content);

          return (
            <div
              key={sectionIndex}
              className={
                'flex flex-col gap-5 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-white/20'
              }
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                boxShadow:
                  '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <h3 className={'text-xl text-white font-bold drop-shadow-sm'}>
                {section.title}
              </h3>
              <div className={'flex flex-col gap-4'}>
                {section.position && (
                  <p className={'text-blue-200 text-base italic opacity-90'}>
                    {section.position}
                  </p>
                )}
                {formattedContent.map((sentence, sentenceIndex) => (
                  <p
                    key={sentenceIndex}
                    className={'leading-relaxed text-gray-300 text-base'}
                  >
                    {sentence}
                  </p>
                ))}

                {/* detail 필드가 있는 경우 불렛 포인트로 렌더링 */}
                {section.detail && (
                  <ul className={'space-y-4 pl-0 mt-2'}>
                    {section.detail
                      .filter((detailItem) => detailItem.content?.trim())
                      .map((detailItem, detailIndex) => {
                        const hasTitle = detailItem.title?.trim();
                        const contentSentences = formatContent(
                          detailItem.content
                        );

                        return (
                          <li key={detailIndex} className={'flex flex-col'}>
                            <div className={'flex items-start gap-4'}>
                              <span className={'text-blue-400 text-base'}>
                                ▸
                              </span>
                              <div className={'flex-1 pt-0.5'}>
                                {hasTitle && (
                                  <h4
                                    className={
                                      'font-medium text-blue-100 mb-2 text-base'
                                    }
                                  >
                                    {detailItem.title}
                                  </h4>
                                )}
                                {contentSentences.map(
                                  (sentence, sentenceIndex) => (
                                    <p
                                      key={sentenceIndex}
                                      className={
                                        'leading-relaxed text-gray-400 text-sm'
                                      }
                                    >
                                      {sentence}
                                    </p>
                                  )
                                )}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
