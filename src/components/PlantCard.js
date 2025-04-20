import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={isSoldOut ? "" : "primary"}
        onClick={handleToggleSoldOut}
      >
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;

