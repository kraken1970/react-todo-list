import React from "react";

export const TodoInput = ({ addTodo, onChange, value }) => {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          placeholder="Enter name"
          onChange={onChange}
          value={value}
          type="text"
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};
