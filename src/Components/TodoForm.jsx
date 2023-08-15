import React, { useState } from "react";
import "./Todo.css";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        &nbsp;
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;
