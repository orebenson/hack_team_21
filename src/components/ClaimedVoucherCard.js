import React from 'react';
import { Box, Typography, Button, Grid} from '@mui/material';
import BorderedCard from './BorderedCard';

const ClaimedVoucherCard = ({ 
    logo,
    logoHeight,
    voucherValue,
    expirationDate,
    isExpired,
    buttonText,
    buttonColor, }) => {

  return (
    <BorderedCard>
      <Grid container alignItems="center">
        <Grid item xs={3}>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                {isExpired ? 'Expired' : 'Valid until'}
            </Typography>
            <Typography variant="body1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                {expirationDate}
            </Typography>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
                <img src={logo} alt="Logo" style={{ height: logoHeight }} />
            </Grid>
            <Grid item style={{ marginRight: '25px', marginBottom: '5px' }}>
                <Typography variant="body1" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                £{voucherValue}   
                </Typography>
            </Grid>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Button variant="contained" color={buttonColor} fullWidth>
            {buttonText}
            </Button>
        </Grid>
      </Grid>

    </BorderedCard>
  );
};

export default ClaimedVoucherCard;