import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppingList({ cart, updateCart, list, updateList }) {
  const categoriesPlant = plantList.reduce(
    (nP1, plant) =>
      nP1.includes(plant.category) ? nP1 : nP1.concat(plant.category),
    []
  );

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

  const [categoryValue, setCategory] = useState("");
  const emptyValue = ""; // Valeur nulle de l'option "Toutes"

  function byCategories(category) {
    const currentCategory = list.find((plant) => plant.category === category); // Récupère plant via la catégorie
    const categoryFiltered = list.filter(
      (plant) => plant.category.includes(categoryValue) // Récupère toutes les plantes qui contiennent la catégorie en question
    );

    if (currentCategory) {
      // Si la plante contient la catégorie
      updateList([...categoryFiltered]); // Alors mettre à jour la liste des plantes qui contiennent la catégorie
    }
  }

  return (
    <div className="lmj-shopping-list">
      <div>
        <select
          value={categoryValue}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={emptyValue}>Toutes</option>
          {categoriesPlant.map((category) => (
            <Categories
              category={category}
              list={list}
              updateList={updateList}
              onClick={() => byCategories(category)}
            />
          ))}
        </select>
        <button onClick={() => setCategory(emptyValue)}>Réinitialiser</button>
      </div>
      <ul className="lmj-plant-list">
        {plantList
          .filter((plant) => plant.category.includes(categoryValue)) // Récupère pour afficher toutes les plantes qui contiennent la catégorie en question
          .map(({ id, cover, name, water, light, price }) => (
            <div key={id}>
              <PlantItem
                id={id}
                cover={cover}
                name={name}
                water={water}
                light={light}
                list={list}
                updateList={updateList}
              />
              <button onClick={() => addToCart(id, name, price)}>
                Ajouter
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
