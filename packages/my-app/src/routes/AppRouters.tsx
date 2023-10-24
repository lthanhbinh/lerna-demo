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

  return (
    <div className="App">
      <Header counterCart={counterProduct} />
      <Router>
        <Routes>
          <Route
            path="/products"
            element={<Products addToCart={addProductToCart} />}
          />
          <Route
            path="/dashboard"
            element={
              <div style={{ height: 'calc(100vh - 200px)', textAlign: 'center', margin: '50px' }}>
                Dashboard
              </div>
            }
          />
          <Route
            path="/app"
            element={
              <div style={{ height: 'calc(100vh - 200px)', textAlign: 'center', margin: '50px' }}>
                Application
              </div>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default AppRouter;


