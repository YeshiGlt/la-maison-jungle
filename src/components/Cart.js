import { useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const monsteraPrice = 8;
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const initialState = 0;

  return isOpen ? (
    <div className="lmj-cart">
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button
          onClick={() => updateCart(cart + 1)}
          className="lmj-cart-add-button"
        >
          Ajouter
        </button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(initialState)}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        onClick={() => setIsOpen(true)}
        className="lmj-cart-toggle-button"
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
