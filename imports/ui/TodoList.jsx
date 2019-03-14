import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Todos from '../api/todos';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>todo list</h2>
        { this.renderTodos() }
      </div>
    );
  }
  renderTodos() {
    const { todos } = this.props;
    return todos.map(todo =>
      <Todo key={todo._id} todo={todo} />
    );
  }
}

export default withTracker(() => {
  const todos = Todos.find().fetch();
  return {
    todos,
  };
})(TodoList);
