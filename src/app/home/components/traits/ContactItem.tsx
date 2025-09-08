'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface ContactItemProps {
  type: 'email' | 'github' | 'blog' | 'resume';
  value: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  isDarkMode?: boolean;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  type,
  value,
  label,
  icon,
  isDarkMode = false,
}) => {
  const getLinkProps = () => {
    switch (type) {
      case 'email':
        return {
          href: `mailto:${value}`,
          target: undefined,
          rel: undefined,
        };
      case 'github':
      case 'blog':
      case 'resume':
        return {
          href: value,
          target: '_blank',
          rel: 'noopener noreferrer',
        };
    }
  };

  const linkProps = getLinkProps();
  const { t } = useTranslation();

  return (
    <div className={'w-full flex justify-center'}>
      <a
        {...linkProps}
        className={`
          flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg transition-colors
          ${
            isDarkMode
              ? 'text-white hover:text-blue-300'
              : 'text-tertiary hover:text-primary'
          }
        `}
        title={type === 'email' ? `email로 이메일 보내기` : `링크로 이동`}
      >
        {icon && (
          <span className={'flex justify-center items-center'}>
            {React.createElement(icon, { 
              className: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' 
            })}
          </span>
        )}
        <span className={'flex justify-center items-center text-center leading-tight'}>
          {t(`contact.labels.${type}`)}
        </span>
      </a>
    </div>
  );
};
