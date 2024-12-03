import React from 'react';
import { ThemeProvider } from '@emotion/react';
import DonutChart from '../components/DonutChart'; // Adjust the import path as necessary
import theme from '../theme';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Home Page</h1>
        <DonutChart percentage={75} text="75%" />
      </div>
    </ThemeProvider>
  );
};

export default Home;

//hello