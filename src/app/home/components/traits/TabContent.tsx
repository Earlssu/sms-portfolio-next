import React from 'react';
import { ContactSection } from './ContactSection';

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
        {sections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className={'flex flex-col gap-4'}>
            <h3 className={'text-lg text-tertiary'}>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      {contact && <ContactSection contact={contact} />}
    </div>
  );
};
