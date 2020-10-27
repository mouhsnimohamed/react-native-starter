import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  fontSize: {
    TINY: 8,
    SMALL: 12,
    MEDIUM: 14,
    LARGE: 18,
    EXTRA_LARGE: 24,
    MASSIVE: 34,
  },
  fontFamily: {
    PRIMARY: 'AvertaDemo-Regular',
    PRIMARY_BOLD: 'AvertaDemo-ExtraBoldItalic',
    SECONDARY: 'Product-Sans-Regular',
    SECONDARY_ITALIC: 'Product-Sans-Italic',
  },
  colors: {
    background: 'white',
    primary: '#003D7C',
    secondary: '#00B2BB',
    light: '#717171',
    text: '#4A4A4A',
    lightText: '#7F7F7F',
  },
};

export { theme, ThemeProvider };
