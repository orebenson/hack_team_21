import React from 'react';
import { ThemeProvider, useTheme } from '@emotion/react';
import theme from '../theme';
import Typography from '@mui/material/Typography';

const textCard = () => {
    const theme = useTheme();
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Benefits
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Benefits
            </Typography>
        </Box>
      </ThemeProvider>
    );
  };

  export default textCard;