import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../features/auth/pages/HomePage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Adicione novas rotas aqui */}
    </Routes>
  );
}

export default AppRoutes;