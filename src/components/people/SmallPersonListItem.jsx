import React from "react";

const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <p className="mb-4 prose">
      Name: {name}, Age: {age} years
    </p>
  );
};

export default SmallPersonListItem;
