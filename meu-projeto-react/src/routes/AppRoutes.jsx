import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'; // Importando a página que criamos

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Aqui você adicionará as rotas para as outras 17 telas no futuro */}
    </Routes>
  );
}

export default AppRoutes;