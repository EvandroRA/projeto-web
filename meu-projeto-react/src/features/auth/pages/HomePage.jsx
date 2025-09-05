import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-4xl font-bold text-texto-principal mb-4">
        Aplicação Funcionando!
      </h1>
      <p className="text-lg text-texto-secundario">
        A estrutura do projeto está limpa, correta e com TailwindCSS.
      </p>
      <div className="mt-8 p-6 bg-fundo-card rounded-lg shadow-md">
        <p>Este card usa a cor de fundo do Figma!</p>
        <button className="mt-4 w-full bg-primaria text-branco font-bold py-2 px-4 rounded-lg hover:bg-primaria-hover">
          Botão de Teste
        </button>
      </div>
    </div>
  );
}

export default HomePage;