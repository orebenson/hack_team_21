import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '../fonts.css';
import { Box } from '@mui/material';
import ClaimedVoucherCard from '../components/ClaimedVoucherCard';

const ClaimedRewards = () => {
    return (
        <ThemeProvider theme={theme}>
            <h2 style={{ textAlign: 'center' }}>Claimed Rewards</h2>
            <Box>
            <ClaimedVoucherCard
                logo={require('../assets/amazon_logo.webp')}
                logoHeight="40px"
                voucherValue="5"
                expirationDate="31/12/2024"
                isExpired={false}
                buttonText="Claimed"
                buttonColor="primary"
            />
            <ClaimedVoucherCard
                logo={require('../assets/Tesco_logo.png')}
                logoHeight="20px"
                voucherValue="10"
                expirationDate="01/12/2024"
                isExpired={true}
                buttonText="Used"
                buttonColor="disabled"
            />
            </Box>
        </ThemeProvider>
    );
}

export default ClaimedRewards