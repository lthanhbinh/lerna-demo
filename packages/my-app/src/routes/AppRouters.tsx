import React, { useState } from 'react';
import { Header } from 'header';
import { Footer } from 'footer';
import { Products } from 'products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const AppRouter = () => {
  let [counterProduct, setCartProduct] = useState<number>(0);

  const addProductToCart = () => {
    setCartProduct(counterProduct + 1);
  };

  const menu = [
    {
      pathname: '/app',
      name: 'Application',
      element: (
        <div style={{ height: 'calc(100vh - 200px)', textAlign: 'center', margin: '50px' }}>
          Application
        </div>
      )
    },
    {
      pathname: '/dashboard',
      name: 'Dashboard',
      element: (
        <div style={{ height: 'calc(100vh - 200px)', textAlign: 'center', margin: '50px' }}>
          Dashboard
        </div>
      )
    },
    {
      pathname: '/products',
      name: 'Products',
      element: <Products addToCart={addProductToCart} />
    }
  ];

  return (
    <div className="App">
      <Router>
        <Header counterCart={counterProduct} routes={menu} />
        <Routes>
          {menu.map((item) => (
            <Route path={item.pathname} element={item.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default AppRouter;
