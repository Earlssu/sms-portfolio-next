import React from 'react';
import { ContactInfo } from '@/app/home/types';
import { CONTACT_CONFIG, ContactItem } from '@/app/home/components';

interface ContactSectionProps {
  contact: ContactInfo;
  isDarkMode?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contact,
  isDarkMode = false,
}) => {
  return (
    <div
      className={`w-full max-w-screen-xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 ${isDarkMode ? 'text-white' : ''}`}
    >
      <ContactItem
        type="email"
        value={contact.email}
        label={CONTACT_CONFIG.email.label}
        icon={CONTACT_CONFIG.email.icon}
        isDarkMode={isDarkMode}
      />

      <ContactItem
        type="github"
        value={contact.github}
        label={CONTACT_CONFIG.github.label}
        icon={CONTACT_CONFIG.github.icon}
        isDarkMode={isDarkMode}
      />

      <ContactItem
        type="blog"
        value={contact.blog}
        label={CONTACT_CONFIG.blog.label}
        icon={CONTACT_CONFIG.blog.icon}
        isDarkMode={isDarkMode}
      />

      <ContactItem
        type="resume"
        value={contact.resume}
        label={CONTACT_CONFIG.resume.label}
        icon={CONTACT_CONFIG.resume.icon}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};
