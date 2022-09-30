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
        <div className="weight">
          <h2>
            76<span>kg</span>
          </h2>
          <p>Weight</p>
        </div>
        <div className="height">
          <h2>6.5</h2>
          <p>Height</p>
        </div>
        <div className="weight">
          <h2>
            25<span>yrs</span>
          </h2>
          <p>Age</p>
        </div>
      </div>

      <div className="user-profile">
        <h2>Add A Break</h2>
      </div>
      <div className="user-details">
        <button>10s</button>
        <button>20s</button>
        <button>30s</button>
        <button>40s</button>
        <button>50s</button>
      </div>

      <div className="user-profile">
        <h2>Exercise Details</h2>
      </div>
      <div className="user-details">
        <h2>Exercise Time</h2>
        <p>10 seconds</p>
      </div>
      <div className="user-details">
        <h2>Break Time</h2>
        <p>10 seconds</p>
      </div>
      <button className="add-to-list">Activity Completed</button>
    </div>
  );
};

export default Activities;
