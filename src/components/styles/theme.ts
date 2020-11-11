import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  fontSize: {
    tiny: 8,
    small: 12,
    medium: 14,
    large: 18,
    extra_large: 24,
    massive: 34,
  },
  fontFamily: {
    primary: 'Open Sans',
    secondary: 'arial',
  },
  colors: {
    white: 'white',
    background: 'white',
    primary: '#003D7C',
    secondary: '#00B2BB',
    light: '#717171',
    text: '#4A4A4A',
    lightText: '#7F7F7F',
    inputBackground: '#00000008',
    modalBackground: 'rgba(255,255,255,0.3)',
  },
};

export { theme, ThemeProvider };
