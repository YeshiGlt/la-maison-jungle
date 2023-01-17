const [show, setShow] = useState(true);

function deletePlant(name, price) {
  const currentPlantDeleted = cart.find((plant) => plant.name === name);

  if (currentPlantDeleted) {
    const cartFilteredDeletedPlant = cart.filter(
      (plant) => plant.name !== name
    );
    updateCart([
      ...cartFilteredDeletedPlant,
      {
        name,
        price,
        total,
        quantity: currentPlantDeleted.quantity - 1,
      },
    ]);
  } else {
    updateCart([...cart, { name, price, quantity: 1 }]);
  }
}

function removeButton() {
  const plantRemoved = cart.filter((plant) => plant.quantity === 0);

  if (plantRemoved) {
    setShow(!show);
  }
}

{
  show && (
    <button
      onClick={() => {
        deletePlant(name, price);
        removeButton;
      }}
    >
      Enlever une {name} du panier
    </button>
  );
}
