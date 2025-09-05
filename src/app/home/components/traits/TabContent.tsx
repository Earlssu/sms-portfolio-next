import React, { Fragment } from 'react';
import { ContactSection } from './ContactSection';
import { formatContent } from '@/shared/utils/contentFormatter';
import { useBackgroundStore } from '@/shared/stores';

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
  const { isDarkMode } = useBackgroundStore();
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
            <div key={sectionIndex} className={'flex flex-col gap-4'}>
              <h3 className={'text-lg text-tertiary font-bold'}>
                {section.title}
              </h3>
              <div className={'flex flex-col gap-3'}>
                {section.position && (
                  <p className={'text-gray-500'}>{section.position}</p>
                )}
                {formattedContent.map((sentence, sentenceIndex) => (
                  <p
                    key={sentenceIndex}
                    className={'leading-relaxed text-secondary'}
                  >
                    {sentence}
                  </p>
                ))}

                {/* detail 필드가 있는 경우 불렛 포인트로 렌더링 */}
                {section.detail && (
                  <ul className={'space-y-4 pl-0'}>
                    {section.detail
                      .filter((detailItem) => detailItem.content?.trim())
                      .map((detailItem, detailIndex) => {
                        const hasTitle = detailItem.title?.trim();
                        const contentSentences = formatContent(detailItem.content);

                        return (
                          <li key={detailIndex} className={'flex flex-col'}>
                            <div className={'flex items-start gap-3'}>
                              <span className={'text-tertiary mt-1 text-lg'}>•</span>
                              <div className={'flex-1 pt-2'}>
                                {hasTitle && (
                                  <h4 className={'font-medium text-tertiary mb-2'}>
                                    {detailItem.title}
                                  </h4>
                                )}
                                {contentSentences.map((sentence, sentenceIndex) => (
                                  <p
                                    key={sentenceIndex}
                                    className={'leading-relaxed text-secondary'}
                                  >
                                    {sentence}
                                  </p>
                                ))}
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

      {contact && <ContactSection contact={contact} isDarkMode={isDarkMode} />}
    </div>
  );
};
