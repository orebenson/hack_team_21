import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const IconCard = ({ icon, info, action, actionHref }) => {
  const theme = useTheme(); // Access the theme to get the primary color

  return (
    <RouterLink 
      to={actionHref} 
      style={{ textDecoration: 'none', color: 'inherit' }}
      aria-label={action}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,               // Fill the parent grid cell
          justifyContent: 'space-between',
          alignItems: 'flex-start',  // Align content to the left
          width: '100%',             // Full width of the container
          height: '100%',           // Fill the entire grid cell height
          borderRadius: 2,          // Rounded corners
          border: `2px solid ${theme.palette.primary.main}`, // Primary color border
          boxSizing: 'border-box',  // Ensures padding and borders don't overflow
          padding: 1,               // Padding inside the card to avoid content touching edges
        }}
      >
        {/* Icon */}
        <Box
          component="img"
          src={icon}
          alt="icon"
          sx={{
            width: '60%',          // Icon width as a percentage of the container
            height: 'auto',        // Maintain aspect ratio of the icon
            alignSelf: 'flex-start', // Align icon to the left
            margin: 0,
            padding: 0,
            mb: 1,                 // Space between icon and other content
          }}
        />

        {/* Info Text */}
        {info && (
          <Typography
            variant="body1"
            sx={{
              textAlign: 'left',    // Left-align the text
              fontSize: '12px',
              marginBottom: 0.5,      // Spacing between info and action text
            }}
          >
            {info}
          </Typography>
        )}

        {/* Action Text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            textAlign: 'left',    // Left-align the action text
            marginTop: 'auto',    // Push the action text to the bottom of the card
          }}
        >
          {action}
        </Typography>
      </Box>
    </RouterLink>
  );
};

IconCard.propTypes = {
  icon: PropTypes.string.isRequired,
  info: PropTypes.string,
  action: PropTypes.string.isRequired,
  actionHref: PropTypes.string.isRequired,
};

IconCard.defaultProps = {
  info: ' ',
};

export default IconCard;
