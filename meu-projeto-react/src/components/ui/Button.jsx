import React from 'react';

// Um botão genérico para ser usado em qualquer lugar do projeto
function Button({ children, onClick, type = 'button' }) {
  // Adicionaremos classes de estilo do Tailwind aqui no futuro
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;