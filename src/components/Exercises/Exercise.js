import React from "react";
import Gyms from "../Gyms/Gyms";
import "./Exercise.css";

const Exercise = (props) => {
  const { exercise } = props;
  return (
    <div className="exercise">
      <h1 className="logo">Ultra Active Club</h1>
      <h4 className="exercise-title">Select today’s exercise</h4>
      <div className="gyms">
        {exercise.map((gym) => (
          <Gyms gym={gym} key={gym.id}></Gyms>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
