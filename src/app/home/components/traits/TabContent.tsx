import React from 'react';
import { ContactSection } from './ContactSection';
import { formatContent } from '@/shared/utils/contentFormatter';

interface TabContentProps {
  tabIndex: number;
  sections: Array<{ title: string; content: string }>;
  contact?: { email: string; github: string; blog: string };
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
      <div className={'flex flex-col gap-6'}>
        {sections?.map((section, sectionIndex) => {
          const formattedContent = formatContent(section.content);
          
          return (
            <div key={sectionIndex} className={'flex flex-col gap-4'}>
              <h3 className={'text-lg text-tertiary'}>{section.title}</h3>
              <div className={'flex flex-col gap-3'}>
                {formattedContent.map((sentence, sentenceIndex) => (
                  <p key={sentenceIndex} className={'leading-relaxed'}>
                    {sentence}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {contact && <ContactSection contact={contact} />}
    </div>
  );
};
