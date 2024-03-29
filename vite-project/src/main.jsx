import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import theme from './theme';
import { ThemeUIProvider } from 'theme-ui';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <App />
    </ThemeUIProvider>
  </React.StrictMode>
);
