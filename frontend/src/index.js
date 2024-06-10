import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/userAuth';
import { CartProvider } from './context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

