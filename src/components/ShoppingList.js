import { plantList } from "../datas/plantList";

function ShoppingList() {
  const categoriesPlant = plantList.reduce(
    (nP1, plant) =>
      nP1.includes(plant.category) ? nP1 : nP1.concat(plant.category),
    []
  );

  return (
    <div>
      <ul>
        {categoriesPlant.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
