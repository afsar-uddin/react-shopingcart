import React from 'react'
import './App.css'
import {TshirtList} from './TshirtList'
import {Cart} from './Cart'
import { CartProvider } from './CartContext'


function App() {
  return (
    <CartProvider>
      <div className="App">
        <Cart />
        <TshirtList />
      </div>
    </CartProvider>
  );
}

export default App;
