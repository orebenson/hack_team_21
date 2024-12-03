import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './fonts.css';
import Home from './pages/Home';
import AvailableRewards from './pages/availableRewards';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/available-rewards" element={<AvailableRewards />} />
      </Routes>
    </Router>
  );
}

export default App;
