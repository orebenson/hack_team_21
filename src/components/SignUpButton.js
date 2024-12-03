import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Corrected import for Button
import Box from '@mui/material/Box'; // Import for Box
import theme from '../theme';
import { useNavigate } from 'react-router-dom';

const SignUpButton = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleClaimClick = () => {
    navigate('/'); // Navigate to the desired route
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          backgroundColor: theme.palette.background, // Background color from the theme
          mx: 'auto',
          maxWidth: 350,
          mt: 4,
        }}
      >
        <Button onClick={handleClaimClick} variant ="contained" size="large" color="primary" sx={{ mx: 'auto', width: 320, height: 60, p:1 }}>
          <Typography variant="body1" component="div">
              Sign up now 
          </Typography>
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default SignUpButton;
