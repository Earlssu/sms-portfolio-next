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
    
    // Hero 섹션(초기 화면)을 제외하고는 모두 다크모드
    // section이 null이면 Hero 섹션(라이트모드), 그 외는 모두 다크모드  
    const shouldBeDark = section !== null;
    if (get().isDarkMode !== shouldBeDark) {
      set({ isDarkMode: shouldBeDark });
    }
  },
  
  setIsDarkMode: (isDark: boolean) => {
    set({ isDarkMode: isDark });
  },
}));
