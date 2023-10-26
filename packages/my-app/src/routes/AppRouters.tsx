import React, { useState, lazy } from 'react';
import { Header } from 'header';
import { Footer } from 'footer';
import { Products } from 'products';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SuspenseRoute } from './SuspenseRoute';

async function delayForDemo() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return import('../pages/Home');
}
const HomePreview = lazy(() => delayForDemo());

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
        <SuspenseRoute>
          <HomePreview />
        </SuspenseRoute>
      )
    },
    {
      pathname: '/dashboard',
      name: 'Dashboard',
      element: (
        <SuspenseRoute>
          <div style={{ height: 'calc(100vh - 200px)', textAlign: 'center', margin: '50px' }}>
            Dashboard
          </div>
        </SuspenseRoute>
      )
    },
    {
      pathname: '/products',
      name: 'Products',
      element: (
        <SuspenseRoute>
          <Products addProductToCart={addProductToCart} />
        </SuspenseRoute>
      )
    }
  ];

  return (
    <div className="App">
      <Router>
        <Header counterCart={counterProduct} routes={menu} />
        <Routes>
          <Route path="/" element={<Navigate to="/app" replace />} />
          {menu.map((item, index) => (
            <Route key={index} path={item.pathname} element={item.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default AppRouter;
