import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from '../theme';
import '../fonts.css';
import NavBar from '../components/NavBar';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

    function FindOutMore() {
        const navigate = useNavigate();

        const handleReturnHome = () => {
            navigate('/');
        };
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <NavBar />
                    <Container>
                        <Typography variant="h2" gutterBottom>
                            Find Out More
                        </Typography>
                        <Box my={4}>
                            <Typography variant="h4" gutterBottom>
                                What are stable rewards?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Stable rewards is a scheme where Lloyds Bank rewards you for saving anything between £50 and £250 a month. The more you save, the more you earn. The reward points are accrued monthly and can be redeemed for a variety of products and services. If you save the target of £250 in a month you will gain a points multiplier, which increases monthly. Consistent saving - results in increased point potential!
                            </Typography>
                        </Box>
                        <Box my={4}>
                            <Typography variant="h4" gutterBottom>
                                So how do I earn points?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You earn points by depositing savings into your Stable Rewards enabled savings account for the month. Each month you do this consecutively you increase your points multiplier month on month.
                            </Typography>
                        </Box>
                        <Box my={4}>
                            <Typography variant="h4" gutterBottom>
                                Can I spend points whenever I like?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Yes! You've already done the hard work of saving money for the month. Once the points are added to your account you can spend them as you wish or save them for another time.
                            </Typography>
                        </Box>
                        <Box my={4}>
                            <Typography variant="h4" gutterBottom>
                                Can I still access my money?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Yes, you can still access your money, and withdraw at any time. However you will not preserve your points multiplier for that month.
                            </Typography>
                        </Box>
                        <Button variant="contained" color="primary" onClick={handleReturnHome}>
                            Return Home
                        </Button>
                    </Container>
                </div>
            </ThemeProvider>
        );
    }

    export default FindOutMore