import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme/theme.ts';
import App from './App.tsx';
import AuthProvider from './providers/Auth.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
