import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Corrected import for Button
import Box from '@mui/material/Box'; // Import for Box
import theme from '../theme';

const SignUpButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          backgroundColor: theme.palette.background, // Background color from the theme
          mx: 'auto',
          p: 2,
          maxWidth: 300,
          mt: 4,
        }}
      >
        <Button variant="contained" size="large" color="primary">
          <Typography variant="body1" component="div">
              Sign up now 
          </Typography>
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default SignUpButton;
