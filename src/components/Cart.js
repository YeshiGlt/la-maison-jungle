import { useState } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (nP1, plantType) => nP1 + plantType.quantity * plantType.price,
    0
  );

  function deletePlant(name) {
    const currentPlantDeleted = cart.find((plant) => plant.name === name); // Récupére la plante via le nom de la plante - Nature de l'élem : Plant{ name, price, quantity }

    const cartFilteredDeletedPlant = cart.filter(
      // Récup. tout le panier sans la plante récupérée à la ligne 13 - Nature de l'élém [{Plant}, {Plant}]
      (plant) => plant.name !== name
    );

    if (currentPlantDeleted.quantity > 1) {
      // Si elle est sup. à 1. Alors quantité diminué de 1
      // Mise à jour du State avec:
      updateCart([
        ...cartFilteredDeletedPlant, // La liste sans la plante recherchée
        {
          id: currentPlantDeleted.id,
          name,
          price: currentPlantDeleted.price,
          quantity: currentPlantDeleted.quantity - 1,
        },
      ]);
    } else {
      // Sinon elle est égale à 1. Alors, plante supprimée du panier
      updateCart([...cartFilteredDeletedPlant]); // Mettre à jour la panier avec cartFilteredDeletedPlant de la ligne 13
    }
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button
        onClick={() => setIsOpen(false)}
        className="lmj-cart-toggle-button"
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart
        .sort((a, b) => {
          return a.id > b.id ? 1 : -1;
        })
        .map(({ name, price, quantity }, index) => (
          <div key={`${name}-${index}`}>
            <div>
              {name} {price}€ x {quantity}
            </div>
            <div>Prix TTC: {price * quantity}€</div>
            <div>
              <button
                onClick={() => {
                  deletePlant(name);
                }}
                className="lmj-cart-toggle-button"
              >
                {quantity === 1 ? "Supprimer" : "Enlever"} une {name} du panier
              </button>
            </div>
          </div>
        ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])} className="lmj-cart-toggle-button">
        Vider le panier
      </button>
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
