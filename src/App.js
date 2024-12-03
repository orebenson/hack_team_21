import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './theme';
import './fonts.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <h1>Hello, Material UI!</h1>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
