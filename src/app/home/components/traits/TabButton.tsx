import React from 'react';

interface TabButtonProps {
  tab: string;
  tabIndex: number;
  currentTab: number;
  onClick: (tabIndex: number) => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  tab,
  tabIndex,
  currentTab,
  onClick,
}) => {
  return (
    <span
      className={`
        px-6 py-3 flex items-center justify-center 
        border rounded-lg cursor-pointer backdrop-blur-sm
        transition-all duration-300 ease-in-out
        ${
          currentTab === tabIndex
            ? 'bg-white/15 text-white border-white/30 font-medium shadow-lg scale-105 ring-2 ring-white/20'
            : 'border-white/10 text-gray-300 hover:border-white/25 hover:text-white hover:bg-white/10 hover:shadow-md'
        }
      `}
      onClick={() => onClick(tabIndex)}
    >
      {tab}
    </span>
  );
};
