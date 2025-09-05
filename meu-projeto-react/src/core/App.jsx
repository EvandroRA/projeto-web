import React from 'react';
import AppRoutes from './routes.jsx';

// Apague o arquivo App.css, não precisaremos mais dele.
// Os estilos serão feitos com Tailwind ou no index.css global.

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AppRoutes />
    </div>
  );
}

export default App;