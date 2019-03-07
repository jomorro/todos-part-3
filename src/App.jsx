import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, clearCompleted } from "./actions";

class App extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.setState(() => ({
      text: ""
    }));
    this.props.dispatch(addTodo(this.state.text));
    document.getElementById("inputField").value = "";
  };

  destroyAll = () => {
    this.props.dispatch(clearCompleted());
  };

  render() {
    let active = this.props.todos.filter(todo => !todo.completed);
    let notActive = this.props.todos.filter(todo => todo.completed);
    return (
      <React.Fragment>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                id="inputField"
                placeholder="What needs to be done?"
                className="new-todo"
                onChange={this.handleChange}
                autoFocus
              />
            </form>
          </header>

          <section className="main">
            <Switch>
              <Route
                exact
                path="/todos-part-3/home"
                render={props => (
                  <TodoList {...props} todos={this.props.todos} />
                )}
              />
              <Route
                path="/todos-part-3/active"
                render={props => <TodoList {...props} todos={active} />}
              />
              <Route
                path="/todos-part-3/completed"
                render={props => <TodoList {...props} todos={notActive} />}
              />
            </Switch>
          </section>

          <footer className="footer">
            <span className="todo-count">
              <strong>{active.length}</strong> item(s) left
            </span>
            <ul className="filters">
              <li>
                <Link to="/todos-part-3/home"> All</Link>
              </li>
              <li>
                <Link to="/todos-part-3/active"> Active</Link>
              </li>
              <li>
                <Link to="/todos-part-3/completed"> Completed</Link>
              </li>
            </ul>
            <button className="clear-completed" onClick={this.destroyAll}>
              Clear completed
            </button>
          </footer>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default withRouter(connect(mapStateToProps)(App));
