import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppTest from './AppTest.js';

import {BrowserRouter as Router} from 'react-router-dom';

import {StoreProductsContextProvider} from './ContextProvider/StoreProductsContext.js';


ReactDOM.render(
  <StoreProductsContextProvider>
    <Router>
      <AppTest />
    </Router>
  </StoreProductsContextProvider>,
  document.getElementById('root')
);


