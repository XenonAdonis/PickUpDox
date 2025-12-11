import React from 'react';
// Import BrowserRouter instead of HashRouter
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Welcome from './pages/Welcome';
// ... (omitted page imports)

const App: React.FC = () => {
  return (
    // Use BrowserRouter
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* ... (rest of routes) ... */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
