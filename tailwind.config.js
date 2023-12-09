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
      // 순서대로 국힘, 더민주, 정의, 기본소득당
      colors: {
        ppp: '#F31260',
        dpk: '#006FEE',
        jp: '#C4841D',
        bip: '#12A150',
        // 정당 배경 color
        bPpp: '#FEE7EF',
        bDpk: '#E6F1FE',
        bJp: '#FEFCE8',
        bBip: '#E8FAF0',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
