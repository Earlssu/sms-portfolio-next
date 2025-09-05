import React from 'react';

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

  return (
    <div className={'flex-1 flex gap-4 justify-center'}>
      <a
        {...linkProps}
        className={`
          flex gap-2 text-lg transition-colors
          ${isDarkMode 
            ? 'text-white hover:text-blue-300' 
            : 'text-tertiary hover:text-primary'
          }
        `}
        title={
          type === 'email' ? `${label}로 이메일 보내기` : `${label} 링크로 이동`
        }
      >
        {icon && (
          <span className={'flex justify-center items-center'}>
            {React.createElement(icon)}
          </span>
        )}
        <span className={'flex justify-center items-center'}>
          {type === 'email' ? value : label}
        </span>
      </a>
    </div>
  );
};
