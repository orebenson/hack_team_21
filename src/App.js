import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import './fonts.css';
import theme from './theme';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AvailableRewards from './pages/availableRewards';
import SignUp from './pages/signup';
import FindOutMore from './pages/findOutMore';
import RewardsInformation from './pages/rewardsInformation';
import RewardBarcode from './pages/rewardBarcode';
import PointsStatement from './pages/PointsStatement';
import ClaimedRewards from './pages/claimedRewards';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="sm" style={{ marginTop: '15px', marginBottom: '20px' }}>
        <Box style={{ marginLeft: '15px', marginRight: '20px' }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/available-rewards" element={<AvailableRewards />} />
              <Route path="/find-out-more" element={<FindOutMore />} />
              <Route path="/available-rewards/reward" element={<RewardsInformation />} />
              <Route path="/available-rewards/reward/barcode" element={<RewardBarcode />} />
              <Route path="/claimed-rewards" element={<ClaimedRewards />} />
              <Route path="/points-statement" element={<PointsStatement />} />

            </Routes>
          </Router>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
