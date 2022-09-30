import React from "react";
import logo from "../../image/profile-user.png";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities">
      <div className="user-profile">
        <img src={logo} alt="" />
        <div>
          <h2>Zahid Hossain</h2>
          <p>Sydney, Australia</p>
        </div>
      </div>
      <div className="user-details">
        
      </div>
    </div>
  );
};

export default Activities;
