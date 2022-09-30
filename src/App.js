import { useEffect, useState } from "react";
import "./App.css";
import Activities from "./components/Activities/Activities";
import Exercise from "./components/Exercises/Exercise";

function App() {
  const [exercise, setExercise] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);

  const AddToList = (time) => {
    setExerciseTime(exerciseTime + time);
  };

  return (
    <div className="App">
      <Exercise exercise={exercise} AddToList={AddToList}></Exercise>
      <Activities exerciseTime={exerciseTime}></Activities>
    </div>
  );
}

export default App;
