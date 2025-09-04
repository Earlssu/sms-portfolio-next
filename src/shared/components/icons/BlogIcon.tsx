import React from 'react';

interface BlogIconProps {
  className?: string;
  size?: number;
}

export const BlogIcon: React.FC<BlogIconProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <span
      role="img"
      aria-label="Blog icon"
      title="Blog icon from SVG Repo"
      data-source="https://www.svgrepo.com/"
      className={`text-tertiary ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(/blog-icon.svg)',
        maskImage: 'url(/blog-icon.svg)',
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
