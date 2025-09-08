'use client';

import { create } from 'zustand';

interface BackgroundState {
  isDarkMode: boolean;
  currentSection: string | null;
  currentPage: string | null;
  setCurrentSection: (section: string | null) => void;
  setIsDarkMode: (isDark: boolean) => void;
  setCurrentPage: (page: string | null) => void;
}

export const useBackgroundStore = create<BackgroundState>()((set, get) => ({
  isDarkMode: false,
  currentSection: null,
  currentPage: null,
  
  setCurrentSection: (section: string | null) => {
    set({ currentSection: section });
    
    const currentPage = get().currentPage;
    
    // Career, Skills, Contact 페이지는 항상 다크모드
    if (currentPage === 'career' || currentPage === 'skills' || currentPage === 'contact') {
      if (!get().isDarkMode) {
        set({ isDarkMode: true });
      }
      return;
    }
    
    // Home 페이지에서는 Hero 섹션(초기 화면)을 제외하고는 모두 다크모드
    // section이 null이면 Hero 섹션(라이트모드), 그 외는 모두 다크모드  
    const shouldBeDark = section !== null;
    if (get().isDarkMode !== shouldBeDark) {
      set({ isDarkMode: shouldBeDark });
    }
  },
  
  setCurrentPage: (page: string | null) => {
    set({ currentPage: page });
    
    // Career, Skills, Contact 페이지는 항상 다크모드로 강제 설정
    if (page === 'career' || page === 'skills' || page === 'contact') {
      set({ isDarkMode: true });
    }
    // Home 페이지는 초기 Hero 섹션부터 시작하므로 라이트모드로 초기화
    else if (page === 'home') {
      set({ isDarkMode: false, currentSection: null });
    }
  },
  
  setIsDarkMode: (isDark: boolean) => {
    set({ isDarkMode: isDark });
  },
}));
