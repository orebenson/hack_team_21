import React from 'react';
import { ThemeProvider } from '@emotion/react';
import TextCard from '../components/textCard'; // Adjust the import path as necessary
import SignUpButton from '../components/SignUpButton'; 
import theme from '../theme';
import logo from '../assets/stable_rewards_logo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const signup = () => {

    const benefits = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vivamus sit amet odio enim.',
        'Etiam egestas cursus nunc, a ultricies leo convallis eget.',
      ];

      const requirements = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vivamus sit amet odio enim.',
        'Etiam egestas cursus nunc, a ultricies leo convallis eget.',
      ];

    return (
      <ThemeProvider theme={theme}>
        <div>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'center', mt: 2 }}>
            Join Stable Rewards today!
            </Typography>
            <Box
            sx={{
            display: 'flex',
            justifyContent: 'center', // Only horizontal alignment
            p: 2, // Optional padding around the content
            }}
            >
            <img src={logo} alt="Logo" style={{ height: '200px' }} />
            </Box>
            <TextCard sx ={{p: 2}}
                heading="Benefits"
                body={benefits}
            />
            <TextCard sx ={{p: 2}}
                heading="Requirements"
                body={requirements}
            />

            <SignUpButton/>
        </div>
      </ThemeProvider>
    );
  };
  
  export default signup;
  