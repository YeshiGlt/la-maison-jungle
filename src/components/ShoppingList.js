import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart }) {
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

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categoriesPlant.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              id={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
            />
            <button onClick={() => addToCart(id, name, price)}>Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
