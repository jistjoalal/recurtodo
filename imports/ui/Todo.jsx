import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render() {
    const { text, date } = this.props.todo;
    return (
      <div >
        <p>{text}</p>
        <p>Due: {moment(date).fromNow()}</p>
        <p>date: {date}</p>
        <button className="btn btn-success" onClick={this.complete}>
          Complete
        </button>
      </div> 
    );
  }
  complete = _ => {
    const { todo } = this.props;
    const really = confirm(`Done with ${todo.text}?`)
    if (really) {
      Meteor.call('todos.complete', todo, (err, res) => {
        if (err) {
          return console.log(err);
        }
      });
    }
  }
}
