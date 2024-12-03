import React from 'react';
import { ThemeProvider } from '@emotion/react';
import DonutChart from '../components/DonutChart';
import theme from '../theme';

const Home = () => {
  const saved = 50;
  const target = 250;
  const month = 'December';

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <DonutChart percentage={(saved / target) * 100} saved={saved} target={target} month={month} />
      </div>
    </ThemeProvider>
  );
};

export default Home;
