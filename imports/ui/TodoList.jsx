import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Todos from '../api/todos';

import Todo from './Todo';

class TodoList extends React.Component {
  render() {
    return (
      <div className="bg-light p-2">
        <h2>Todo List</h2>
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
  const query = {};
  const projection = {
    sort: {
      date: 1,
    },
  };
  const todos = Todos.find(query, projection).fetch();
  return {
    todos,
  };
})(TodoList);
