import React, {useState} from "react";

function PlantCard({plant}) {
const [inStock, setInStock] = useState(true);
const toggleSold = () => {
  setInStock(inStock => !inStock)
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button onClick ={toggleSold}className="primary">{inStock ? "In Stock" : "Sold out"}</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
