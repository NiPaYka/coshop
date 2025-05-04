import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7B6CF6',
      light: '#B3A6FD',
      dark: '#5A4FCF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F6B6D8',
      light: '#FFD6EC',
      dark: '#C97BA6',
      contrastText: '#fff',
    },
    background: {
      default: '#F8F7FA',
      paper: '#fff',
    },
    text: {
      primary: '#2D2346',
      secondary: '#7B6CF6',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    h1: { 
      fontWeight: 800, 
      letterSpacing: 1,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h2: { 
      fontWeight: 700, 
      letterSpacing: 0.5,
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.2rem',
      },
    },
    h3: { 
      fontWeight: 600,
      fontSize: '1.3rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.8rem',
      },
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontSize: '1.1rem',
      '@media (min-width:600px)': {
        fontSize: '1.3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.3rem',
      },
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.1rem',
      },
    },
    button: { 
      fontWeight: 600, 
      letterSpacing: 1,
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.1rem',
      },
    },
    body1: {
      fontSize: '0.9rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.1rem',
      },
    },
    body2: {
      fontSize: '0.8rem',
      '@media (min-width:600px)': {
        fontSize: '0.9rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1rem',
      },
    }
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: '0 0 24px 24px',
          boxShadow: '0 4px 24px 0 rgba(123,108,246,0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 4px 32px 0 rgba(123,108,246,0.10)',
          transition: 'box-shadow 0.3s, transform 0.3s',
          '&:hover': {
            boxShadow: '0 8px 40px 0 rgba(246,182,216,0.18)',
            transform: 'translateY(-4px) scale(1.03)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontSize: '0.9rem',
          padding: '8px 16px',
          background: 'linear-gradient(90deg, #7B6CF6 0%, #F6B6D8 100%)',
          boxShadow: '0 2px 8px 0 rgba(123,108,246,0.10)',
          transition: 'background 0.3s, box-shadow 0.3s, transform 0.2s',
          '@media (min-width:600px)': {
            fontSize: '1rem',
            padding: '10px 24px',
          },
          '@media (min-width:900px)': {
            fontSize: '1.1rem',
            padding: '12px 32px',
          },
          '&:hover': {
            background: 'linear-gradient(90deg, #F6B6D8 0%, #7B6CF6 100%)',
            boxShadow: '0 4px 16px 0 rgba(246,182,216,0.18)',
            transform: 'scale(1.04)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            background: 'rgba(107, 138, 253, 0.1)',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          fontSize: '0.9rem',
          minHeight: 48,
          '@media (min-width:600px)': {
            fontSize: '1rem',
            minHeight: 56,
          },
          '@media (min-width:900px)': {
            fontSize: '1.1rem',
            minHeight: 64,
          },
          '&:hover': {
            color: '#6B8AFD',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 30,
            fontSize: '0.9rem',
            padding: '8px 16px',
            '@media (min-width:600px)': {
              fontSize: '1rem',
              padding: '10px 20px',
            },
            '@media (min-width:900px)': {
              fontSize: '1.1rem',
              padding: '12px 24px',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontSize: '0.8rem',
          height: 32,
          '@media (min-width:600px)': {
            fontSize: '0.9rem',
            height: 36,
          },
          '@media (min-width:900px)': {
            fontSize: '1rem',
            height: 40,
          },
        },
      },
    },
  },
});

export default theme; 