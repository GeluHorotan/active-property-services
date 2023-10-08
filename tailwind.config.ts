import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '20px',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      colors: {
        custom_blue: {
          50: '#F6F6FF',
          100: '#EEFAFC',
          200: '#5669E8',
          300: '#3851A8',
          400: '#007FFF',
          500: '#1F22C7',
          600: '#0C4AB9',
          700: '#6B5CD1',
          800: '#F1F1F3',
          900: '#000000',
        },
        custom_yellow: {
          50: '#FFF9E9',
          100: '#FFEACB',
          200: '#FFDCA8',
          300: '#FFCE85',
          400: '#FFC063',
          500: '#FFB240',
          600: '#FFA41E',
          700: '#D98200',
          800: '#A66300',
          900: '#7A4A00',
        },
        custom_gray: {
          50: '#FEFCFF',
          100: '#F6F6F6',
          200: '#EAEEF7',
          300: '#D4D8E6',
          400: '#B6B6B6',
          500: '#888888',
          600: '#838FDE',
          700: '#575757',
          800: '#575757',
          900: '#141414',
        },
        custom_purple: {
          50: '#EEF4FF',
          100: '#F3CA4B',
          200: '#C21A76',
          300: '#FF6880',
          400: '#B7B1E1',
          500: '#D4D8E6',
          600: '#E4E4E4',
          700: '#E4E4E4',
          800: '#C8C8C8',
          900: '#888888',
        },
        custom_green: {
          50: '#D3EFE0',
          100: '#E4F9EB',
          200: '#D3EFE0',
          300: '#B7D9C9',
          400: '#39A86D',
          500: '#1BC290',
          600: '#07AB64',
          700: '#07AB64',
          800: '#07AB64',
          900: '#07AB64',
        },
        custom_red: {
          50: '#FFEBF6',
          100: '#FFEBF6',
          200: '#FFEBF6',
          300: '#FFEBF6',
          400: '#FFEBF6',
          500: '#FFEBF6',
          600: '#FFEBF6',
          700: '#FF6880',
          800: '#FF0000',
          900: '#FF0000',
        },
        custom_orange: {
          50: '#FEF2FB',
          100: '#FEF2FB',
          200: '#FEF2FB',
          300: '#FEF2FB',
          400: '#FEF2FB',
          500: '#FEF2FB',
          600: '#FEF2FB',
          700: '#D98200',
          800: '#D98200',
          900: '#D98200',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
