import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

const RewardsCard = ({ multiplier, pointsEarned, totalPoints }) => {
  const theme = useTheme();

  return (
    <Card style={{ border: `2px solid ${theme.palette.primary.main}`, borderRadius: '12px', marginTop: '20px', width: '100%' }}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default RewardsCard;
