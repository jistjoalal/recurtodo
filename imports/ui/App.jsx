import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class App extends React.Component {
  render() {
    return (
      <div>

        <div className="navbar bg-secondary text-dark">
          <h1>RecurTodo</h1>
        </div>

        <div className="container bg-dark p-2">

          <AddTodo />

          <TodoList />

        </div>

      </div>
    )
  }
}
