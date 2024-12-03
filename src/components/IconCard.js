import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import BorderedCard from './BorderedCard'; // Adjust the import path as necessary

const IconCard = ({ icon, info, action, actionHref }) => {
  return (
    <RouterLink to={actionHref} style={{ textDecoration: 'none', color: 'inherit' }}>
      <BorderedCard>
        <Box display="flex" flexDirection="column" alignItems="flex-start" style={{ height: '100%', minHeight: '150px' }}>
          <Box display="flex" alignItems="center" mb={1}>
            <img src={icon} alt="icon" style={{ width: '50px', height: '50px' }} />
          </Box>
          <Typography variant="body1" style={{ fontSize: '14px', flex: '1' }}>
            {info}
          </Typography>
          <Typography variant="body1" style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '8px' }}>
            {action}
          </Typography>
        </Box>
      </BorderedCard>
    </RouterLink>
  );
};

export default IconCard;
