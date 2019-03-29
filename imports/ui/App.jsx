import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import InstallButton from './InstallButton';

export default class App extends React.Component {
  render() {
    return (
      <div>

        <div className="navbar bg-secondary text-dark">
          <h1 className="text-nowrap text-monospace">Do _, Due _.</h1>
          <InstallButton />
        </div>

        <div className="container bg-dark p-2">

          <AddTodo />

          <TodoList />

        </div>

      </div>
    )
  }
}
