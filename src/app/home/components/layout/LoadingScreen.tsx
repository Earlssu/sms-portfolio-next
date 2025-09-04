import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-2xl text-primary">Loading...</div>
    </div>
  );
};
