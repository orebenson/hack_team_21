import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '../fonts.css';
import { Typography } from '@mui/material';

const SignUp = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Sign Up</Typography>
        </ThemeProvider>
    );
}

export default SignUp
