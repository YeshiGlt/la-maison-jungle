import Light from "../assets/light.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const quantityLW = {
    1: "peu",
    2: "modérement",
    3: "beaucoup",
  };

  const scaleType =
    careType === "light" ? (
      <img src={Light} alt="light-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  function handleClick({ quantityLW, scaleValue, careType }) {
    alert(
      `Cette plante requiert ${quantityLW[scaleValue]} ${
        careType === "light" ? "de lumière" : "d'arrosage"
      }`
    );
  }

  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityType[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span
            key={rangeElem.toString()}
            onClick={() => handleClick({ quantityLW, scaleValue, careType })}
          >
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
