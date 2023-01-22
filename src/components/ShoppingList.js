import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart }) {
  const categoriesPlant = plantList.reduce(
    (nP1, plant) =>
      nP1.includes(plant.category) ? nP1 : nP1.concat(plant.category),
    [] // Permet de comparer l'élem suivant avec le précédent au sein du tableau (avec l'accumulator) + concat pour éviter les doublons de catégories
  );

  const [categoryValue, setCategory] = useState("");

  function addToCart(id, name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { id, name, price, quantity: currentPlantAdded.quantity + 1 },
      ]);
    } else {
      updateCart([...cart, { id, name, price, quantity: 1 }]);
    }
  }

  function byCategories(category) {
    const currentCategory = categoryValue.find(
      (plant) => plant.category === category
    ); // Récupère plant via la catégorie
    const categoryFiltered = categoryValue.filter(
      (plant) => plant.category.includes(categoryValue) // Récupère toutes les plantes qui contiennent la catégorie en question
    );

    if (currentCategory) {
      // Si la plante contient la catégorie
      setCategory([...categoryFiltered]); // Alors mettre à jour la liste des plantes qui contiennent la catégorie
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categoryValue={categoryValue}
        categoriesPlant={categoriesPlant}
        setCategory={setCategory}
        onClick={() => byCategories(category)}
      />
      <ul className="lmj-plant-list">
        {plantList
          .filter((plant) => plant.category.includes(categoryValue)) // Récupère pour afficher toutes les plantes qui contiennent la catégorie en question
          .map(
            (
              { id, cover, name, water, light, price } // Permet de parcourir un tableau (avec une durée déjà définie contrairement au boucle for par ex)
            ) => (
              <div key={id}>
                <PlantItem
                  id={id}
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                />
                <button
                  onClick={() => addToCart(id, name, price)}
                  className="lmj-plant-button"
                >
                  Ajouter
                </button>
              </div>
            )
          )}
      </ul>
    </div>
  );
}

export default ShoppingList;
