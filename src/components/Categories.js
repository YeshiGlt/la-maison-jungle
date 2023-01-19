function Categories({ categoryValue, categoriesPlant, setCategory }) {
  const emptyValue = ""; // Valeur nulle de l'option "Toutes"

  return (
    <div>
      <select
        value={categoryValue}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value={emptyValue}>Toutes</option>
        {categoriesPlant.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button onClick={() => setCategory(emptyValue)}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
