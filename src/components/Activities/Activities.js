import React, { useEffect, useState } from "react";
import logo from "../../image/profile-user.png";
import "./Activities.css";

const Activities = (props) => {
  const { exerciseTime } = props;
  const [breakTime, setBreakTime] = useState(0);

  const breakTimeFun = (time) => {
    setBreakTime(time);
    localStorage.setItem("BreakTime", JSON.stringify(time));
  };

  useEffect(() => {
    const restoredBreakTime = JSON.parse(localStorage.getItem("BreakTime"));
    setBreakTime(restoredBreakTime);
  }, []);

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
        <button onClick={() => breakTimeFun(10)}>10s</button>
        <button onClick={() => breakTimeFun(20)}>20s</button>
        <button onClick={() => breakTimeFun(30)}>30s</button>
        <button onClick={() => breakTimeFun(40)}>40s</button>
        <button onClick={() => breakTimeFun(50)}>50s</button>
      </div>

      <div className="user-profile">
        <h2>Exercise Details</h2>
      </div>
      <div className="user-details">
        <h2>Exercise Time</h2>
        <p>{exerciseTime} seconds</p>
      </div>
      <div className="user-details">
        <h2>Break Time</h2>
        <p>{breakTime} seconds</p>
      </div>
      <button className="add-to-list">Activity Completed</button>
    </div>
  );
};

export default Activities;
