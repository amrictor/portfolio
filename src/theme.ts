import { Theme, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    flexCentered: Pick<CSSProperties, 'display' | 'justifyContent' | 'alignItems'>
  }
}

export const lightBlue = 'rgb(186,218,241)';
export const midBlue = 'rgb(91,167,221)';
export const primaryBlue = 'rgb(28,134,209)';
export const darkBlue = 'rgb(14, 110, 179)';
export const darkerBlue = 'rgb(0, 87, 153)';

export const theme: Theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: primaryBlue,
    },
  },
  typography: {
    fontFamily: '\'Raleway\', sans-serif',
    h3: {
      padding: 8,
      fontSize: 28,
      fontWeight: 500,
      textTransform: 'uppercase'
    },
    caption: {
      color: 'white',
      fontSize: 14,
      fontWeight: 300
    }
  },
  mixins: {
    flexCentered: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
});
