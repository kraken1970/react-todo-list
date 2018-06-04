import React from "react";

export const TodoItem = ({ toggleDone, todoItem, name, deleteTodo }) => {
  return (
    <div>
      <button onClick={() => toggleDone(todoItem.id)}>v</button>{" "}
      <span className={todoItem.done ? "done" : null}>{todoItem.name}</span>
      <button onClick={() => deleteTodo(todoItem.id)}>x</button>
    </div>
  );
};
