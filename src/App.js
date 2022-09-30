import { useEffect, useState } from "react";
import "./App.css";
import Activities from "./components/Activities/Activities";
import Exercise from "./components/Exercises/Exercise";

function App() {
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);

  const AddToList = (id) => {
    console.log(exercise, id);
  };

  return (
    <div className="App">
      <Exercise exercise={exercise} AddToList={AddToList}></Exercise>
      <Activities></Activities>
    </div>
  );
}

export default App;
