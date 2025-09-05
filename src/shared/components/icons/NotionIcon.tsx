import React from 'react';

interface NotionIconProps {
  className?: string;
  size?: number;
}

export const NotionIcon: React.FC<NotionIconProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <span
      role="img"
      aria-label="Notion icon"
      title="Notion icon from SVG Repo"
      data-source="https://www.svgrepo.com/"
      className={`text-primary ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(/notion-icon.svg)',
        maskImage: 'url(/notion-icon.svg)',
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
