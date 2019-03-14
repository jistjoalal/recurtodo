import React from 'react';

import Todos from '../api/todos';

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      num: 1,
      time: 'day',
    };
  }
  render() {
    const { text, num, time } = this.state;
    return (
      <form onSubmit={this.submit}>

        <div className="form-group">
          <label>Todo</label>
          <input type="text" ref="text" placeholder="Todo" value={text}
            onChange={this.change('text')}
          />
        </div>
        
        <div className="form-group">
          <label>#</label>
          <input type="number" ref="num" placeholder="#" value={num} min={1}
            onChange={this.change('num')}
          />
        </div>

        <div className="form-group">
          <label>time</label>
          <select ref="time" value={time} onChange={this.change('time')}>
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="month">Month(s)</option>
            <option value="year">Year(s)</option>
          </select>
        </div>

        <button type="submit">Submit</button>

      </form>
    )
  } 
  submit = e => {
    e.preventDefault();
    const { text, num, time } = this.state;
    Meteor.call('todos.add', { text, num, time }, (err, res) => {
      if (err) {
        return console.log(err);
      }
      else {
        this.setState({
          text: '',
          num: 1,
          time: 'day',
        });
      }
    })
  }
  change = prop => _ => {
    this.setState({
      [prop]: this.refs[prop].value,
    });
  }
}
