import React from "react";
import TodoItem from "./TodoItem.jsx";

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="todo-list">
          {this.props.todos.map((todo, i) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              value={todo.title}
              checked={todo.completed}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
export default TodoList;
