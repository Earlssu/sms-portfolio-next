import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 반응형 브레이크포인트 추가 정의
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)',
          hover: 'var(--tertiary-hover)',
        },
        quaternary: {
          DEFAULT: 'var(--quaternary)',
          hover: 'var(--quaternary-hover)',
        },
        card: {
          DEFAULT: 'var(--card-bg)',
          border: 'var(--card-border)',
          ring: 'var(--card-ring)',
          hover: 'var(--card-hover)',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // 반응형 폰트 사이즈 추가
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // 모바일용 대형 텍스트
        'hero-mobile': ['2.5rem', { lineHeight: '1.1' }],
        'hero-tablet': ['3.5rem', { lineHeight: '1.1' }],
        'hero-desktop': ['4.5rem', { lineHeight: '1' }],
      },
      // 반응형 스페이싱 추가
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
