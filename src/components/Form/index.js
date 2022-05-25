import { useState } from "react";
import './styles.css';

function Form({ addTodo }) {
  const [task, setTask] = useState("");

  return (
    <div className="container-form">
        <h3>Gerencie suas Tarefas</h3>
      <input value={task} onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={() => addTodo(task)}>Enviar</button>
    </div>
  );
}

export default Form;
