// Entrada usada apenas no build para pré-renderizar o HTML da página.
// Assim buscadores e IAs leem todo o conteúdo sem precisar executar JavaScript.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(): string {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
