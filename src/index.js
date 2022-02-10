import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './style/global.css'
import App from './pages/App';

import './i18n'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
