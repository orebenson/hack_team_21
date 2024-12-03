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
                style={{ width: '150px', height: 'auto', display: 'block', margin: '0 auto' }} 
            />

            <div className="rewards-description">
                <BorderedCard>
                    <div className="reward-description">
                        <h4>Reward Details</h4>
                        <ul>
                            <li><strong>Redemption Rate:</strong> 500 points = £5 voucher</li>
                            <li>This reward is limited to one voucher per user per month.</li>
                            <li>The voucher will expire in <strong>365 days</strong>.</li>
                            <li>
                                Redeem this voucher at selected stores, or apply it online by entering 
                                the unique voucher code at checkout.
                            </li>
                        </ul>
                        <h4>Additional Notes:</h4>
                        <ul>
                            <li>Ensure you use the voucher before it expires, as extensions are not permitted.</li>
                            <li>Points deducted for this reward are non-refundable.</li>
                        </ul>
                        <p><strong>Terms and Conditions applies.</strong></p>
                    </div>
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
