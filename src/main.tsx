import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme/theme.ts';
import App from './App.tsx';
import AuthProvider from './providers/Auth.tsx';

/**
 * Renderiza a aplicação no elemento com o id "root".
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
