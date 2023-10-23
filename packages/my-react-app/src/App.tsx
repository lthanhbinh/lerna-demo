import React, { useEffect, useState } from 'react';
// @ts-ignore
import { load } from 'web-component-load';
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
    setCartProduct(counterProduct++);
  }
  return (
    <div className="App">
      <Header counterCart={counterProduct}/>
      <Products productsCollection={products} addToCart={addProductToCart}/>
      <Footer/>
    </div>
  );
}

export default App;
