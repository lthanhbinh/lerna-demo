import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// @ts-ignore
import {Header} from 'header';
import {Footer} from 'footer';
import {Products} from 'products';
import './App.css';

function App() {
  const products = [
    {
      "id": 1,
      "name": "Elegance Hair Gel",
      "description": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "price": 9.99,
      "stock": 10567
    },
    {
      "id": 2,
      "name": "Elegance Hair Serum",
      "description": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "price": 14.99,
      "stock": 9956
    },
    {
      "id": 3,
      "name": "Elegance Hair Shampoo",
      "description": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "price": 7.99,
      "stock": 5689
    },
    {
      "id": 4,
      "name": "Elegance Hair Shampoo",
      "description": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper lobortis nisl ut ex ea commodo consequat.",
      "price": 10.99,
      "stock": 5689
    },
    {
      "id": 5,
      "name": "Elegance Hair Shampoo 2",
      "description": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper lobortis nisl ut ex ea commodo consequat.",
      "price": 10.99,
      "stock": 5689
    },
    {
      "id": 6,
      "name": "Elegance Hair Shampoo 2",
      "description": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper lobortis nisl ut ex ea commodo consequat.",
      "price": 10.99,
      "stock": 5689
    }
  ];
  let [counterProduct, setCartProduct] = useState<number>(0);
  const addProductToCart = () => {
    setCartProduct(counterProduct+1);
  }
  return (
    <div className="App">
      <Header counterCart={counterProduct}/>
      <Router>
        <Routes>
          <Route path="/app" element={<div>App</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/products" element={<Products productsCollection={products} addToCart={addProductToCart}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
