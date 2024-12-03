import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import BorderedCard from './BorderedCard'; // Import the BorderedCard component

const RewardsCard = ({ multiplier, pointsEarned, totalPoints }) => {
  return (
    <BorderedCard>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Rewards Point Multiplier 
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          <span role="img" aria-label="fire">🔥</span> {multiplier}x
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Points Earned This Month
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {pointsEarned}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Total Reward Points
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold' }}>
          {totalPoints}
        </Typography>
      </Box>
    </BorderedCard>
  );
};

export default RewardsCard;
