import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/auth/pages/HomePage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Ex: <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  );
}

export default AppRoutes;