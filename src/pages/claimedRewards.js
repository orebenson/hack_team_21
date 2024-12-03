import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '../fonts.css';
import { Box, Typography } from '@mui/material';

const ClaimedRewards = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Available Rewards</Typography>
            <Box>
                <VoucherCard logo={require('../assets/amazon_logo.webp')} logoHeight={'45px'} voucherValue="5" points="500" />
                <VoucherCard logo={require('../assets/apple_logo.png')} logoHeight={'45px'} voucherValue="10" points="1000" />
                <VoucherCard logo={require('../assets/Tesco_logo.png')} logoHeight={'20px'} voucherValue="5" points="500" />
            </Box>
        </ThemeProvider>
    );
}

export default ClaimedRewards
