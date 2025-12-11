import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import SpineSafety from './pages/SpineSafety';
import PickupGuide from './pages/PickupGuide';
import CommonMistakes from './pages/CommonMistakes';
import HandlingTips from './pages/HandlingTips';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/spine-safety" element={<SpineSafety />} />
        <Route path="/pickup-guide" element={<PickupGuide />} />
        <Route path="/common-mistakes" element={<CommonMistakes />} />
        <Route path="/handling-tips" element={<HandlingTips />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;