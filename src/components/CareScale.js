import Water from "../assets/water.svg";
import Light from "../assets/sun.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const scaleType =
    careType === "light" ? (
      <img src={Light} alt="light" />
    ) : (
      <img src={Water} alt="water" />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
