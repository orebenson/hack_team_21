import React from 'react';
import { Box, Typography, Button, Grid} from '@mui/material';
import BorderedCard from './BorderedCard';

const VoucherCard = ({ logo, logoHeight, voucherValue, points }) => {
  return (
    <BorderedCard>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
            <img src={logo} alt="Logo" style={{ height: logoHeight }} />
        </Grid>
        <Grid item xs={4}>
            <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
            £{voucherValue} voucher
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained" color="primary" fullWidth>
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                Claim
                </Typography>
                <Typography variant="body1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                {points}pts
                </Typography>
            </Box>
            </Button>
        </Grid>
      </Grid>
    </BorderedCard>
  );
};

export default VoucherCard;