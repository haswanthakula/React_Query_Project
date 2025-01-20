import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
// Remove the DevTools import
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* Remove DevTools component */}
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();