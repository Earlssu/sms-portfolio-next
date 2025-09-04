import React from 'react';
import { ContactItem } from './';
import { CONTACT_CONFIG, ContactInfo } from './contactConfig';

interface ContactSectionProps {
  contact: ContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <div className={'flex gap-6 mt-8'}>
      <ContactItem
        type="email"
        value={contact.email}
        label={CONTACT_CONFIG.email.label}
        icon={CONTACT_CONFIG.email.icon}
      />
      
      <ContactItem
        type="github"
        value={contact.github}
        label={CONTACT_CONFIG.github.label}
        icon={CONTACT_CONFIG.github.icon}
      />
      
      <ContactItem
        type="blog"
        value={contact.blog}
        label={CONTACT_CONFIG.blog.label}
        icon={CONTACT_CONFIG.blog.icon}
      />
    </div>
  );
};
