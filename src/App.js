import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './theme';
import './fonts.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
