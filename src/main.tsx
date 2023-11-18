import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
