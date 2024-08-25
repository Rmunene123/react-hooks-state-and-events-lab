import React, { useState } from "react";

function Item({ name, category }) {
 
  const [inCart, setInCart] = useState(false);

  // Function to toggle the item in the cart
  const toggleCartStatus = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
