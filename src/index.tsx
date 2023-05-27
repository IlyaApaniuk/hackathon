import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { DAppProvider } from '@usedapp/core';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes/routes';
import config from './config/mantleConfig';
import reportWebVitals from './reportWebVitals';
import routesMapper from './routes/routesMapper';

import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DAppProvider config={config}>
        <Suspense>
          {routesMapper(routes)}
        </Suspense>
      </DAppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
