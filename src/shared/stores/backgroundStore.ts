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
    
    // aboutMe, projects, techStack 섹션일 때 다크모드 활성화
    // ThankYouSection(null) 진입 시 라이트모드로 복귀
    const shouldBeDark = section === 'aboutMe' || section === 'projects' || section === 'techStack';
    if (get().isDarkMode !== shouldBeDark) {
      set({ isDarkMode: shouldBeDark });
    }
  },
  
  setIsDarkMode: (isDark: boolean) => {
    set({ isDarkMode: isDark });
  },
}));
