import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render() {
    const { text, date } = this.props.todo;
    return (
      <div className="border shadow p-2 m-2">
        <p className="lead m-1">{text}</p>
        <p className="text-muted m-1">
          Due: {moment(date).fromNow()}
          {/* {date} */}
        </p>
        <button className="btn btn-success m-1" onClick={this.complete}>
          Complete
        </button>
        <button className="btn btn-danger m-1" onClick={this.remove}>
          Remove
        </button>
      </div> 
    );
  }
  remove = _ => {
    const { todo } = this.props;
    const really = confirm(`Really remove ${todo.text}?`);
    if (really) {
      Meteor.call('todos.remove', todo, (err, res) => {
        if (err) {
          return console.log(err);
        }
      });
    }
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
