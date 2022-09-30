import React from "react";
import "./Gyms.css";

const Gyms = (props) => {
  const { gym } = props;
  return (
    <div className="gym">
      <img src={gym.image} alt="" />
      <h2>{gym.name}</h2>
      <p>
        <small>{gym.description.slice(0, 80)}</small>
      </p>
      <p>For Age: {gym.age}</p>
      <p>Time required: {gym.time} </p>
      <button className="add-to-list">Add to list</button>
    </div>
  );
};

export default Gyms;
