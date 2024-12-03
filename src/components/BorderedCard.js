import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@emotion/react';

const BorderedCard = ({ children }) => {
  const theme = useTheme();

  return (
    <Card style={{ border: `2px solid ${theme.palette.primary.main}`, borderRadius: '12px', marginTop: '20px', width: '100%' }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default BorderedCard;
