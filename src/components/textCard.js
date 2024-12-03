import React from 'react';
import { ThemeProvider, useTheme } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import theme from '../theme';

const TextCard = ({ heading, body }) => {
    /*const theme = useTheme();*/
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, textAlign: 'center', borderRadius: 4, backgroundColor: theme.palette.secondary.main, mx: 'auto', p:1, maxWidth: 300, mt: 2,}}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: 16}}>
          {heading}
        </Typography>
        <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px' }}>
          {body.map((item, index) => (
            <li key={index} style={{ marginBottom: '0px' }}>
              <Typography variant="body1" component="div" sx ={{fontSize: 14}}>
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </ThemeProvider>
  );
};

  export default TextCard;