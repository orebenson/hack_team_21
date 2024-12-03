import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './fonts.css';
import theme from './theme';
import Home from './pages/home';
import AvailableRewards from './pages/availableRewards';
import RewardsInformation from './pages/rewardsInformation';
import RewardBarcode from './pages/rewardBarcode';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@emotion/react';
import { Box, Container } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="sm" style={{ marginTop: '15px', marginBottom: '20px' }}>
        <Box style={{ marginLeft: '15px', marginRight: '20px' }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/signup" element={<SignUp />} /> */}
              <Route path="/available-rewards" element={<AvailableRewards />} />
              <Route path="/available-rewards/reward" element={<RewardsInformation />} />
              <Route path="/available-rewards/reward/barcode" element={<RewardBarcode />} />

              <Route path="/previous-rewards" element={<PreviousRewards />} />
              <Route path="/find-out-more" element={<FindOutMore />} />
              <Route path="/points-statement" element={<PointsStatement />} />

            </Routes>
          </Router>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
