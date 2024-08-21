import React from "react";

const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <div className="card prose bg-slate-500">
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>{hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default LargePersonListItem;
