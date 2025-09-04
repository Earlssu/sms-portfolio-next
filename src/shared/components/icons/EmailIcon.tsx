import React from 'react';

interface EmailIconProps {
  className?: string;
  size?: number;
}

export const EmailIcon: React.FC<EmailIconProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <span
      role="img"
      aria-label="Email icon"
      title="Email icon from SVG Repo"
      data-source="https://www.svgrepo.com/"
      className={`text-tertiary ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(/email-icon.svg)',
        maskImage: 'url(/email-icon.svg)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
};
