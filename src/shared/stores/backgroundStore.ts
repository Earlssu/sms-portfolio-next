'use client';

import { create } from 'zustand';

interface BackgroundState {
  isDarkMode: boolean;
  currentSection: string | null;
  setCurrentSection: (section: string | null) => void;
  setIsDarkMode: (isDark: boolean) => void;
}

export const useBackgroundStore = create<BackgroundState>()((set, get) => ({
  isDarkMode: false,
  currentSection: null,
  
  setCurrentSection: (section: string | null) => {
    set({ currentSection: section });
    
    // aboutMe 섹션일 때만 다크모드 활성화
    const shouldBeDark = section === 'aboutMe';
    if (get().isDarkMode !== shouldBeDark) {
      set({ isDarkMode: shouldBeDark });
    }
  },
  
  setIsDarkMode: (isDark: boolean) => {
    set({ isDarkMode: isDark });
  },
}));
