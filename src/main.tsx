import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
