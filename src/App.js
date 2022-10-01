import { useEffect, useState } from "react";
import "./App.css";
import Activities from "./components/Activities/Activities";
import Exercise from "./components/Exercises/Exercise";
import { addToLocalStorage, getStoredList } from "./utilities/localStorage";

function App() {
  const [exercise, setExercise] = useState([]);
  const [list, setList] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, []);

  const AddToList = (id) => {
    const selectedItem = exercise.find((exercises) => exercises.id === id);

    const listSelectedItem = [...list, selectedItem];
    setList(listSelectedItem);
    addToLocalStorage(id);
  };

  useEffect(() => {
    let exerciseTime = 0;
    for (const exerciseTimes of list) {
      exerciseTime = exerciseTime + exerciseTimes.time;
    }
    setExerciseTime(exerciseTime);
  }, [list]);

  useEffect(() => {
    const restoredList = getStoredList();
    const restoredLists = [];
    for (const id in restoredList) {
      const storedItem = exercise.find((exercises) => exercises.id === id);
      restoredLists.push(storedItem);
      console.log(storedItem);
    }
  }, [exercise]);

  return (
    <div className="App">
      <Exercise exercise={exercise} AddToList={AddToList}></Exercise>
      <Activities exerciseTime={exerciseTime}></Activities>
    </div>
  );
}

export default App;
