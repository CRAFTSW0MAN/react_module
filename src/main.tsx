import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { StoreProvider } from './store/configureStore'
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>
);
