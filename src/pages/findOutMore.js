import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import '../fonts.css';
import { Typography, Box } from '@mui/material';
import BorderedCard from '../components/BorderedCard';

function FindOutMore() {
    return (
        <ThemeProvider theme={theme}>

            <h2 style={{ textAlign: 'center' }} >FAQs</h2>
            <BorderedCard>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        What are stable rewards?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Stable rewards is a scheme where Lloyds Bank rewards you for saving anything between £50 and £250 a month. The more you save, the more you earn. The reward points are accrued monthly and can be redeemed for a variety of products and services. If you save the target of £250 in a month you will gain a points multiplier, which increases monthly. Consistent saving - results in increased point potential!
                    </Typography>
                </Box>
            </BorderedCard>
            <BorderedCard>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        So how do I earn points?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        You earn points by depositing savings into your Stable Rewards enabled savings account for the month. Each month you do this consecutively you increase your points multiplier month on month.
                    </Typography>
                </Box>
            </BorderedCard>
            <BorderedCard>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Can I spend points whenever I like?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Yes! You've already done the hard work of saving money for the month. Once the points are added to your account you can spend them as you wish or save them for another time.
                    </Typography>
                </Box>
            </BorderedCard>
            <BorderedCard>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Can I still access my money?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Yes, you can still access your money, and withdraw at any time. However you will not preserve your points multiplier for that month.
                    </Typography>
                </Box>
            </BorderedCard>
        </ThemeProvider>
    );
}

export default FindOutMore
