import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 정당 color
      colors: {
        ppp: '#E61E2B', // 국민의힘
        dpk: '#0B68B3', // 더불어민주당
        jp: '#FFED00', // 정의당
        bip: '#00D2C3', // 기본소득당
        tk: '#5B157F', // 시대전환
        tpp: '#D6001C', // 진보당
        hk: '#004B83', // 한국의희망
        na: '#797C85', // 무소속
        // Gray color
        gray: {
          0.5: '#EBEBEB',
          1: '#E0E0E0',
          2: '#999999',
          3: '#555555',
          4: '#262626',
        },
        // Primary color
        primary: {
          1: '#F5F7FD',
          2: '#96BCFA',
          3: '#191919',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
