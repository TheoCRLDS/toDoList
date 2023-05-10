import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  /* Variables d'état */
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  /* Fonctions */
  const getInput = (e) => {
    /* Récupérer la valeur saisie dans l'input */
    setNewTask(e.target.value);
  };

  const addTask = () => {
    console.log("Valeur de l'input : ", newTask);
    /* Ajouter valeur dans l'input dans le tableau taskList */
    setTaskList([...taskList, newTask]);
    /* Vider l'input */
    setNewTask("");
  };

  const value = (itemID) => {
    setTaskList(taskList.filter((t) => t.id !== itemID));
  };

  const displayTask = () => {
    /* Boucle sur le tableau taskList */
    return taskList.map((item, key) => {
      return (
        /* Afficher le composant task dans ul */
        <Task key={key} task={item} /* done={(onClick = { value })}*/ />
      );
    });
  };

  /* J'utilise le hook useEffect pour update instantanément le tableau */
  useEffect(() => {
    console.log("Tableau update : ", taskList);
  }, [setTaskList, taskList]);

  return (
    <div className="containerApp">
      <input
        type="text"
        name="contenu"
        value={newTask}
        onChange={getInput}
        placeholder="Saisir une tâche"
      />
      <button onClick={addTask}>Valider</button>
      <h3>Tâches : </h3>
      <ul>{displayTask()}</ul>
    </div>
  );
}

export default App;
