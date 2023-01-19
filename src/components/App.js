import React, { useState } from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import logo from "../assets/logo.png";

function App() {
  const title = "La maison jungle";
  const [cart, updateCart] = useState([]);

  return (
    <React.Fragment>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>
      </Banner>
      <div>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
