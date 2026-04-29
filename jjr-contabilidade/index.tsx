// Importações principais do React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ponto de entrada da aplicação React
// Este arquivo é responsável por montar o componente App no DOM

// Busca o elemento HTML com id="root" onde a aplicação será montada
const rootElement = document.getElementById('root');

// Validação: garante que o elemento root existe no HTML
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Cria a raiz React usando o novo createRoot (React 18+)
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente App dentro do StrictMode
// StrictMode ajuda a identificar potenciais problemas durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
