import React from 'react';
import { Box } from '@mui/material';
import IconCard from './IconCard'; // Adjust the import path as necessary
import coinsIcon from '../assets/coins_icon.png'; // Import the coins icon
import pieChartIcon from '../assets/pie_chart_icon.png'; // Import the pie chart icon
import progressIcon from '../assets/progress_icon.png'; // Import the progress icon
import telescopeIcon from '../assets/telescope_logo.png'; // Import the telescope icon

const HomeGrid = () => {
  return (
    <Box 
      display="grid" 
      gridTemplateColumns="repeat(2, 1fr)" 
      gap={2} 
      width="100%"
      mt={2}
      style={{ height: '100%' }}
    >
      <IconCard 
        icon={coinsIcon} 
        info="Find available rewards to claim" 
        action="View Rewards" 
        actionHref="/available-rewards"
      />
      <IconCard 
        icon={pieChartIcon} 
        info="Check your claimed reward history" 
        action="Claimed Rewards" 
        actionHref="/claimed-rewards"
      />
      <IconCard 
        icon={progressIcon} 
        info="View your accumulated points" 
        action="Points Statement" 
        actionHref="/points-statement"
      />
      <IconCard 
        icon={telescopeIcon} 
        info="" 
        action="Find Out More" 
        actionHref="/find-out-more"
      />
    </Box>
  );
};

export default HomeGrid;
