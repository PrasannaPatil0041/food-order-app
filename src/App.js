import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Image from "./components/Layout/Image";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";
import "./App.css";

import Cart from "./components/Cart/Cart";

function App() {
  const [closeCart, setcloseCart] = useState(false);

  const showCart = () => {
    setcloseCart(true);
  };

  const hideCart = () => {
    setcloseCart(false);
  };
  return (
    <CartProvider>
      <div className="whole-body">
        {closeCart && <Cart onHide={hideCart} />}
        <Header onShow={showCart} />
        <Image />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
