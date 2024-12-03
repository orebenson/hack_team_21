import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { useNavigate  } from 'react-router-dom';
import amazonLogo from '../assets/amazon_logo.webp';
import theme from '../theme';
import BorderedCard from '../components/BorderedCard'; 
import { Button } from '@mui/material';


const RewardsInformation = () => {
    const navigate = useNavigate();


    const handleClaimButtonClick = () => {
        navigate('/available-rewards/reward/barcode');
    };

    return (
        <ThemeProvider theme={theme}>

        <section className="rewards-container">

            <h2 className="rewards-heading" style={{ textAlign: 'center' }}>Rewards Information</h2>

            <img 
                src={amazonLogo}
                alt="A visual representation of rewards" 
                className="rewards-image" 
                style={{ width: '250px', height: 'auto', display: 'block', margin: '0 auto' }} 
            />

            <div className="rewards-description">
                <BorderedCard>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </BorderedCard>
            </div>

            <div className="rewards-action" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button 
                    className="claim-button" 
                    aria-label="Claim your reward now"
                    style={{ backgroundColor: theme.palette.primary.main, fontSize: '18px', padding: '10px 20px', width: '200px', height: '60px'}} 
                    variant="contained"
                    onClick={handleClaimButtonClick}
                >
                    Claim Now
                </Button>
            </div>
            
        </section>
        </ThemeProvider>

    );
};

export default RewardsInformation;
