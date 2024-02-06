import 'styled-components';

declare module 'styled-componetns' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    }

    opacity: {
      p_10: string;
    }
  }
}