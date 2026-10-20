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

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// No build de produção o HTML já vem pré-renderizado (scripts/prerender.mjs):
// nesse caso o React apenas "hidrata" o conteúdo existente. No `npm run dev`
// o root vem vazio e a aplicação é renderizada do zero.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

// Remove a tela de carregamento quando as fontes estiverem prontas
// (com limite de tempo para nunca segurar o visitante)
const preloader = document.getElementById('preloader');
if (preloader) {
  const hide = () => {
    preloader.classList.add('is-hidden');
    preloader.addEventListener('transitionend', () => preloader.remove(), { once: true });
    setTimeout(() => preloader.remove(), 800);
  };
  const timeout = new Promise((resolve) => setTimeout(resolve, 1500));
  Promise.race([document.fonts?.ready ?? Promise.resolve(), timeout]).then(hide);
}
