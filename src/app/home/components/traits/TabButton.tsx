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
        px-6 py-2 flex items-center justify-center 
        border rounded-lg cursor-pointer
        tab-transition
        ${
          currentTab === tabIndex
            ? 'tab-active bg-primary text-quaternary border-primary font-medium'
            : 'border-tertiary text-tertiary hover:border-secondary-hover hover:text-secondary-hover hover:bg-card-hover'
        }
      `}
      onClick={() => onClick(tabIndex)}
    >
      {tab}
    </span>
  );
};
