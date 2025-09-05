import React from 'react';
import AppRoutes from './routes/AppRoutes'; // Importa nosso gerenciador de rotas
import './styles/App.css';

function App() {
  // A única responsabilidade do App agora é renderizar as rotas
  return (
    <div>
      {/* Você pode adicionar um Header e Footer aqui no futuro, fora do AppRoutes */}
      <AppRoutes />
    </div>
  );
}

export default App;