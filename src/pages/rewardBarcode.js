import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import amazonLogo from '../assets/amazon_logo.webp';
import barcode from '../assets/barcode.png';
import theme from '../theme';
import { Button } from '@mui/material';


const RewardBarcode = () => {
    const navigate = useNavigate();

    const handleReturnButtonClick = () => {
        navigate('/available-rewards');
    };

    return (
        <ThemeProvider theme={theme}>

        <section className="barcode-container">

            <h2 className="barcode-heading" style={{ textAlign: 'center' }}>Rewards Claimed. Enjoy!</h2>

            <img 
                src={amazonLogo}
                alt="A visual representation of rewards" 
                className="barcode-image" 
                style={{ width: '250px', height: 'auto', display: 'block', margin: '0 auto' }} 
            />

            <img 
                src={barcode}
                alt="A visual representation of barcode" 
                className="barcode-image" 
                style={{ width: '300px', height: 'auto', display: 'block', margin: '0 auto',marginTop: '50px' }} 
            />

            <div className="wallet-action" style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
                <Button 
                    className="wallet-button" 
                    aria-label="Add barcode to wallet"
                    style={{ backgroundColor: theme.palette.secondary.main, fontSize: '18px', padding: '10px 20px', width: '250px', height: '60px'}} 
                    variant="contained"
                >
                    Add to Wallet
                </Button>
                
            </div>

            
            <div className="return-action" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button 
                    className="return-button" 
                    aria-label="Return to rewards"
                    style={{ backgroundColor: 'grey', fontSize: '18px', padding: '10px 20px', width: '250px', height: '60px'}} 
                    variant="contained"
                    onClick={handleReturnButtonClick}
                >
                    Return to Rewards
                </Button>
                
            </div>
            
        </section>
        </ThemeProvider>

    );
};

export default RewardBarcode;
