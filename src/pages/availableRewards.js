import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '../fonts.css';
import NavBar from '../components/NavBar';

const AvailableRewards = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <NavBar />

            </div>
        </ThemeProvider>
    );
}

export default AvailableRewards