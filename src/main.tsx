import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<section className="error">Error</section>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
