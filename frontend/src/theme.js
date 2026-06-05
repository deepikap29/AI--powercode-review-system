import { createTheme } from '@mui/material/styles';

const premiumPalette = {
  primary: {
    main: '#0b2447',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#6a11cb',
    contrastText: '#ffffff',
  },
  success: {
    main: '#00b894',
  },
  background: {
    default: '#081227',
    paper: '#071226',
  },
  text: {
    primary: '#e6f0ff',
    secondary: '#a8bedc',
  },
};

export function getTheme(mode = 'premium') {
  if (mode === 'light') {
    return createTheme({
      palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        background: { default: '#f4f6f8', paper: '#fff' }
      },
      typography: {
        fontFamily: 'Inter, Arial, sans-serif'
      }
    });
  }

  // premium is default
  return createTheme({
    palette: premiumPalette,
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: 'Poppins, Inter, Arial, sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            background: 'linear-gradient(90deg,#0b2447 0%,#2575fc 100%)',
            boxShadow: '0 6px 24px rgba(11,36,71,0.6)'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            background: 'linear-gradient(90deg,#6a11cb 0%,#2575fc 100%)',
            boxShadow: '0 6px 18px rgba(102,51,153,0.24)',
            color: '#fff'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
            backdropFilter: 'blur(6px)'
          }
        }
      }
    }
  });
}

export default getTheme('premium');
