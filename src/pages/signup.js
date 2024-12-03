import React from 'react';
import { ThemeProvider } from '@emotion/react';
import TextCard from '../components/textCard'; // Adjust the import path as necessary
import theme from '../theme';
import logo from '../assets/stable_rewards_logo.png';
import Box from '@mui/material/Box';

const signup = () => {
    return (
      <ThemeProvider theme={theme}>
        <div>
            <Box
            sx={{
            display: 'flex',
            justifyContent: 'center', // Only horizontal alignment
            p: 2, // Optional padding around the content
            }}
            >
            <img src={logo} alt="Logo" style={{ height: '200px' }} />
            </Box>
            <TextCard sx ={{p: 2}}/>
        </div>
      </ThemeProvider>
    );
  };
  
  export default signup;
  