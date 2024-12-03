import React from 'react';
import { ThemeProvider } from '@emotion/react';
import DonutChart from '../components/DonutChart';
import theme from '../theme';

const Home = () => {
  const saved = 250;
  const target = 250;
  const month = 'December';

  return (
    <ThemeProvider theme={theme}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        minHeight: '100vh', 
        padding: '20px',
        justifyContent: 'flex-start'
      }}>
        <DonutChart percentage={(saved / target) * 100} saved={saved} target={target} month={month} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
