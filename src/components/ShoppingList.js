import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const categoriesPlant = plantList.reduce(
    (nP1, plant) =>
      nP1.includes(plant.category) ? nP1 : nP1.concat(plant.category),
    []
  );

  return (
    <div>
      <ul className="lmj-plant-list">
        {categoriesPlant.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id} className="lmj-plant-item">
            {plant.name}
            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
