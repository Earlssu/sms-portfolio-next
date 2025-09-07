import React from 'react';

interface ScrollIndicatorProps {
  scrollProgress: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollProgress }) => {
  return (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
      <div className="w-1 h-32 bg-white/20 rounded-full overflow-hidden">
        <div
          className="w-full bg-gradient-to-b from-blue-400 to-blue-600 transition-all duration-300 ease-out rounded-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
