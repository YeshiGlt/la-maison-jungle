import { useState } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (nP1, plantType) => nP1 + plantType.quantity * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, quantity }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {quantity}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
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
