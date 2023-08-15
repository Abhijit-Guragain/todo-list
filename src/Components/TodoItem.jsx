import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <p>{todo.text}</p>
        &nbsp; &nbsp;
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </>
  );
};

export default TodoItem;
