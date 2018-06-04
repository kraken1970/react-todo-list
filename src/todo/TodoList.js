import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ deleteTodo, toggleDone, todoList }) => {
  return todoList.map((todoItem, idx) => (
    <TodoItem
      toggleDone={toggleDone}
      deleteTodo={deleteTodo}
      key={idx}
      todoItem={todoItem}
    />
  ));
};
