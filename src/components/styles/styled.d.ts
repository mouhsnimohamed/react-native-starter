import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      light: string;
      secondary: string;
      text: string;
      lightText: string;
    };
    fontSize: {
      TINY: number;
      SMALL: number;
      MEDIUM: number;
      LARGE: number;
      EXTRA_LARGE: number;
      MASSIVE: number;
    };
    fontFamily: {
      PRIMARY: string;
      PRIMARY_BOLD: string;
      SECONDARY: string;
      SECONDARY_ITALIC: string;
    };
  }
}
