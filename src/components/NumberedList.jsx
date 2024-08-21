import React from "react";

const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          <ItemComponent key={item.name} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

export default NumberedList;
