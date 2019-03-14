import React from 'react';

export default class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      num: 1,
      time: 'day',
      err: '',
    };
  }
  render() {
    const { text, num, time, err } = this.state;
    return (
      <form className="bg-light p-2" onSubmit={this.submit}>

        <h2>New Todo</h2>

        {err &&
          <p className="alert alert-warning">
            {err}
          </p>
        }

        <div className="form-group">
          <label>Todo</label>
          <input
            className="form-control"
            type="text"
            ref="text"
            placeholder="Todo"
            value={text}
            onChange={this.change('text')}
          />
        </div>
        
        <div className="form-group">
          <label>#</label>
          <input
            className="form-control"
            type="number"
            ref="num"
            placeholder="#"
            value={num}
            min={1}
            onChange={this.change('num')}
          />
        </div>

        <div className="form-group">
          <label>time</label>
          <select
            className="form-control"
            ref="time"
            value={time}
            onChange={this.change('time')}
          >
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="month">Month(s)</option>
            <option value="year">Year(s)</option>
          </select>
        </div>

        <button className="btn btn-dark" type="submit">
          Submit
        </button>

      </form>
    )
  } 
  submit = e => {
    e.preventDefault();
    const { text, num, time } = this.state;
    Meteor.call('todos.add', { text, num, time }, (err, res) => {
      if (err) {
        this.setState({ err: err.reason });
        return console.log(err);
      }
      else {
        this.setState({
          text: '',
          num: 1,
          time: 'day',
          err: '',
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
