import React from "react";

const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <h2>
      {name} - {price}
    </h2>
  );
};

export default SmallProductListItem;
