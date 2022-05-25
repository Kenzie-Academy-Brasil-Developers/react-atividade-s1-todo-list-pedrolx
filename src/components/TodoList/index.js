import './styles.css';

function TodoList({todos, handleTodo}) {
  return (
      <ul>
      {todos.length > 0 && todos.map((task, index) => {
          return (
              <div>
                <li key={index}>{task}
                </li>
                <button onClick={()=> handleTodo(task)}>Excluir</button>
              </div>
          );
        })}
    </ul>
  );
}

export default TodoList;
