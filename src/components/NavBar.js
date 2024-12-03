import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../assets/stable_rewards_logo.png';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme } from '@emotion/react';
import theme from '../theme';

const NavBar = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" style={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Stable Rewards
            </Typography>
          </Box>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
