import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="basket" element={<Basket />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


