import Water from "../assets/water.svg";
import Light from "../assets/sun.svg";
import { useState } from "react";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const quantityType = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };

  const scaleType =
    careType === "light" ? (
      <img src={Light} alt="light" />
    ) : (
      <img src={Water} alt="water" />
    );

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
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
