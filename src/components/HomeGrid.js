import React from 'react';
import { Box } from '@mui/material';
import IconCard from './IconCard'; // Adjust the import path as necessary
import coinsIcon from '../assets/coins_icon.png';
import pieChartIcon from '../assets/pie_chart_icon.png';
import progressIcon from '../assets/progress_icon.png';
import telescopeIcon from '../assets/telescope_logo.png';

const cardData = [
  { icon: coinsIcon, info: "Find available rewards to claim", action: "View Rewards", actionHref: "/available-rewards" },
  { icon: pieChartIcon, info: "Check your claimed reward history", action: "Claimed Rewards", actionHref: "/previous-rewards" },
  { icon: progressIcon, info: "View your accumulated points", action: "Points Statement", actionHref: "/points-statement" },
  { icon: telescopeIcon, info: "", action: "Find Out More", actionHref: "/find-out-more" },
];

const HomeGrid = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)" // 2 columns (always 2 columns)
      gap={2}  // Spacing between cards
      sx={{
        width: '100%',
        mt: 2,
        gridAutoRows: '1fr', // Ensures consistent height for each row
      }}
    >
      {cardData.map((card, index) => (
        <Box
          key={index}
          sx={{
            display: 'block',
            flexDirection: 'column',
            height: '100%', // Ensure full height of the parent grid cell
            width: '100%',  // Ensure full width of the parent grid cell
            borderRadius: 2,
            boxSizing: 'border-box',
            boxShadow: 2, // Add a subtle shadow to the card
          }}
        >
          <IconCard
            icon={card.icon}
            info={card.info}
            action={card.action}
            actionHref={card.actionHref}
          />
        </Box>
      ))}
    </Box>
  );
};

export default HomeGrid;
