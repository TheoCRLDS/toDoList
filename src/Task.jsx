import "./Task.css";

function Task(props) {
  return (
    /* Contenu de la ligne */
    <div className="taskContainer">
      <li>
        <p>
          {props.task} <button onClick={props.done}>Terminé</button>
        </p>
      </li>
    </div>
  );
}

export default Task;
