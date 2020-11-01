import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      background: string;
      primary: string;
      light: string;
      secondary: string;
      text: string;
      lightText: string;
      inputBackground: string;
    };
    fontSize: {
      tiny: number;
      small: number;
      medium: number;
      large: number;
      extra_large: number;
      massive: number;
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
  }
}
