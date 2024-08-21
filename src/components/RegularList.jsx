import React from "react";

const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <div>
      {items.map((item) => (
        <ItemComponent key={item.name} {...{ [resourceName]: item }} />
      ))}
    </div>
  );
};

export default RegularList;
