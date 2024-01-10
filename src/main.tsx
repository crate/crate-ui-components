import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IntlProvider } from 'react-intl';
import messages from './rootMessages';
import Router from './devPages/Router/Router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale="en" messages={messages.en}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
);
