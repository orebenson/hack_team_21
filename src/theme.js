import { createTheme } from '@mui/material/styles';

// Define your custom colors
const colors = {
  white: '#FFFFFF',
  black: '#000000',
  racingGreen: '#024731',
  heritageGreen: '#006A4D',
  everydayGreen: '#11B67A', // Primary
  vibrantGreen: '#6CF479',  // Secondary
  calmGreen: '#C7FFC6',
  highlightGreen: '#0BE248', // Accent
  charcoal: '#323233',
};

// Create the theme
const theme = createTheme({
  palette: {
    primary: {
      main: colors.everydayGreen,
    },
    secondary: {
      main: colors.vibrantGreen,
    },
    background: {
      default: colors.white,
    },
    text: {
      primary: colors.black,
    },
  },
  typography: {
    fontFamily: 'GT Ultra, sans-serif',
    h1: {
      fontFamily: 'GT Ultra, sans-serif',
    },
    h2: {
      fontFamily: 'GT Ultra, sans-serif',
    },
    h6: {
        fontFamily: 'GT Ultra, sans-serif',
    },
    body1: {
      fontFamily: 'GT Ultra, sans-serif',
    },
    button: {
      fontFamily: 'GT Ultra, sans-serif',
      textTransform: 'none',
    },
    // Add more typography variants as needed
  },
});

export default theme;
