import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';


declare module "@mui/material/styles/createMixins" {
  interface Mixins {
    flexCentered: Pick<CSSProperties, 'display' | 'justifyContent' | 'alignItems'>
  }
};

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(28, 134, 209, 1)',
    },
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
