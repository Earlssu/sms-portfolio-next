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
      className={`border border-card shadow-xl z-10 ring-2 ring-card bg-card rounded-md h-60 w-80 p-4 animate__animated animate__fadeIn ${className || ''}`}
    >
      <h2 className={'text-tertiary'}>{title}</h2>
      {children}
    </div>
  );
};

export default TraitCard;
