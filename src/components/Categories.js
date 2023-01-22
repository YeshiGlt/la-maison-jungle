import "../styles/Categories.css";

function Categories({ categoryValue, categoriesPlant, setCategory }) {
  const emptyValue = ""; // Valeur nulle de l'option "Toutes"

  return (
    <div className="lmj-categories">
      <select
        value={categoryValue}
        onChange={(e) => setCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value={emptyValue}>Toutes</option>
        {categoriesPlant.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button
        onClick={() => setCategory(emptyValue)}
        className="lmj-categories-button"
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default Categories;
