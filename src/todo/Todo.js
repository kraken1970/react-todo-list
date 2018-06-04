import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoCounter } from "./TodoCounter";

export class Todo extends React.Component {
  state = {
    value: "",
    filter: "all",
    todoList: []
  };

  onChange = e => {
    const { value } = e.target;

    this.setState({
      value
    });
  };

  addTodo = e => {
    e.preventDefault();

    if (this.state.value.length === 0) {
      return;
    }

    this.setState({
      value: "",
      todoList: [
        ...this.state.todoList,
        { name: this.state.value, done: false, id: Date.now() }
      ]
    });
  };

  toggleFilter = filter => {
    this.setState({
      filter
    });
  };

  toggleDone = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.id !== id)
    });
  };

  getFilteredList = () => {
    const { filter, todoList } = this.state;

    return this.state.todoList.filter(
      todo => todo.done === (filter === "done")
    );
  };

  render() {
    return (
      <React.Fragment>
        <TodoInput
          addTodo={this.addTodo}
          onChange={this.onChange}
          value={this.state.value}
        />
        <TodoFilter toggleFilter={this.toggleFilter} />
        <TodoList
          toggleDone={this.toggleDone}
          deleteTodo={this.deleteTodo}
          todoList={
            this.state.filter === "all"
              ? this.state.todoList
              : this.getFilteredList()
          }
        />
        <TodoCounter count={this.state.todoList.length} />
      </React.Fragment>
    );
  }
}
