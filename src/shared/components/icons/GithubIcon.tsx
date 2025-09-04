import React from 'react';

interface GithubIconProps {
  className?: string;
  size?: number;
}

export const GithubIcon: React.FC<GithubIconProps> = ({
  className = '',
  size = 20,
}) => {
  return (
    <span
      role="img"
      aria-label="GitHub icon"
      title="GitHub icon from SVG Repo"
      data-source="https://www.svgrepo.com/"
      className={`text-tertiary ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: 'url(/github-icon.svg)',
        maskImage: 'url(/github-icon.svg)',
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
