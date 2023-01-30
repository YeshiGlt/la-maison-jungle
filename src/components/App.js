import { useState, useEffect } from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import "../styles/Layout.css";

function App() {
  const title = "La maison jungle";
  const [categoryValue, setCategory] = useState("");
  const [isFooterShown, updateIsFooterShown] = useState(true);
  const [cart, updateCart] = useState([]);

  // Renvoie/Lis les données enregistrées, soit items correspondant aux articles ajoutés dans cart
  let savedData = localStorage.getItem("items"); // let : droit de changer sa valeur | vs | const : pas le droit de changer sa valeur

  try {
    // Test s'il y a une erreur
    savedData = JSON.parse(localStorage.getItem("items")); // Si pas d'erreur, converti du text en JSON
  } catch (error) {
    savedData = []; // S'il y a une erreur il passe sur le catch
  }

  useEffect(() => {
    // Si savedData existe alors ..
    if (savedData) {
      updateCart(savedData); // ..  mets à jour le cart à partir des données savedData
    }
  }, []);

  useEffect(() => {
    // Enregistre les données ajoutées dans le cart - cart comprenant plusieurs obj il faut le JSON.stringify
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">{title}</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart
          cart={cart}
          updateCart={updateCart}
          categoryValue={categoryValue}
          setCategory={setCategory}
        />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          categoryValue={categoryValue}
          setCategory={setCategory}
        />
      </div>
      {/* Cacher ou montrer le footer */}
      <button onClick={() => updateIsFooterShown(!isFooterShown)}>
        Cacher !
      </button>
      {isFooterShown && <Footer cart={cart} />}
    </div>
  );
}

export default App;
