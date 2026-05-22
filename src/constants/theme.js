/** Design tokens — keep in sync with styles/tokens.css @theme */

export const colors = {
  brand: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  accent: {
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
  },
  emergency: {
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
  surface: {
    DEFAULT: '#f8fafc',
    muted: '#f1f5f9',
    card: '#ffffff',
  },
};

export const typography = {
  fontFamily: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  lineHeight: {
    tight: '1.2',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
  },
};

export const spacing = {
  section: {
    sm: '3rem',
    md: '4rem',
    lg: '6rem',
  },
  container: {
    px: { mobile: '1rem', tablet: '1.5rem', desktop: '2rem' },
    max: '80rem',
  },
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
