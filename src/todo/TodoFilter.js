import React from "react";

export const TodoFilter = ({ toggleFilter }) => {
  return (
    <div>
      <button onClick={() => toggleFilter("all")}>all</button>
      <button onClick={() => toggleFilter("done")}>done</button>
      <button onClick={() => toggleFilter("undone")}>undone</button>
    </div>
  );
};
