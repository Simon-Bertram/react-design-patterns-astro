import React from "react";

const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <div className="border mb-8 shadow-lg text-green-700">
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </div>
  );
};

export default LargeProductListItem;
