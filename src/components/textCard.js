import React from 'react';
import { ThemeProvider, useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../theme';

const TextCard = () => {
    /*const theme = useTheme();*/
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, textAlign: 'center', borderRadius: 4, backgroundColor: theme.palette.primary.main, mx: 'auto', p: 1}}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Benefits
            </Typography>
            <Typography variant="body1" component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus sit amet odio enim. Etiam egestas cursus nunc, a ultricies leo convallis eget.
            Nullam suscipit nibh dapibus velit accumsan cursus. 
            Phasellus a porta mauris. 
            Sed tempor dapibus pharetra. Nullam a est odio
            </Typography>
        </Box>
      </ThemeProvider>
    );
  };

  export default TextCard;