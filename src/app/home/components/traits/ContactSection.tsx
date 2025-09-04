import React from 'react';

interface ContactSectionProps {
  contact: {
    email: string;
    github: string;
    blog: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <div className={'flex gap-6 mt-8'}>
      <div className={'flex-1 flex gap-4 justify-center'}>
        <h3 className={'text-lg text-tertiary'}>email:</h3>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>

      <div className={'flex-1 flex gap-4 justify-center'}>
        <a
          className={'text-lg text-tertiary'}
          href={contact.github}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className={'flex-1 flex gap-4 justify-center'}>
        <a
          className={'text-lg text-tertiary'}
          href={contact.blog}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
    </div>
  );
};
