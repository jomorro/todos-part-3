import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { markComplete, deleteTodo } from "../actions";

class TodoItem extends React.Component {
  markComplete = id => evt => {
    this.props.dispatch(markComplete(id));
  };

  deleteTodo = id => () => {
    this.props.dispatch(deleteTodo(id));
  };

  render() {
    return (
      <React.Fragment>
        <li id="list" className={this.props.checked ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={this.markComplete(this.props.id)}
              checked={this.props.checked}
            />

            <label>{this.props.value}</label>
            <button
              className="destroy"
              onClick={this.deleteTodo(this.props.id)}
            />
          </div>
        </li>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default withRouter(connect(mapStateToProps)(TodoItem));
