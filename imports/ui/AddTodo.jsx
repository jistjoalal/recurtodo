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
    return (
      <form className="bg-light p-2" onSubmit={this.submit}>

        <h2>New Todo</h2>

        { this.renderError() }

        { this.renderTextInput() }

        { this.renderDateInput() }

        <button className="btn btn-dark" type="submit">
          Submit
        </button>

      </form>
    )
  }
  renderError() {
    return this.state.err && (
      <p className="alert alert-warning">
        {this.state.err}
      </p>
    );
  }
  renderTextInput() {
    return (
      <div className="form-group">
        <label>Todo</label>
        <input
          className="form-control"
          type="text"
          ref="text"
          placeholder="Todo"
          value={this.state.text}
          onChange={this.change('text')}
        />
      </div>
    );
  }
  renderDateInput() {
    return (
      <div className="form-group">

        <label>Due in:</label>
        
        <div className="d-flex">

          <input
            className="form-control"
            type="number"
            ref="num"
            placeholder="#"
            value={this.state.num}
            min={1}
            onChange={this.change('num')}
          />

          <select
            className="form-control"
            ref="time"
            value={this.state.time}
            onChange={this.change('time')}
          >
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="month">Month(s)</option>
            <option value="year">Year(s)</option>

          </select> 
          
        </div>

      </div>
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
    if (prop == 'num') {
      return this.setState({
        num: +this.refs.num.value,
      });
    }
    this.setState({
      [prop]: this.refs[prop].value,
    });
  }
}
