import React from 'react';
import 'animate.css';

interface TraitCardProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const TraitCard: React.FC<TraitCardProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <div
      className={`border-2 border-white h-60 w-80 p-4 animate__animated animate__fadeIn ${className || ''}`}
    >
      <h2 className={''}>{title}</h2>
      {children}
    </div>
  );
};

export default TraitCard;
