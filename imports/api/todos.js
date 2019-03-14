import { Mongo } from 'meteor/mongo';

export default Todos = new Mongo.Collection('todos');

const DAY = 3600 * 24 * 1000;
const WEEK = DAY * 7;
const MONTH = WEEK * 4;
const YEAR = DAY * 365;

const UNITS = {
  day: DAY,
  week: WEEK,
  month: MONTH,
  year: YEAR,
};

const dateFromNow = (num, time) => {
  const msFromNow = num * UNITS[time];
  return Date.now() + msFromNow;
}

Meteor.methods({
  'todos.add'({ text, num, time }) {
    Todos.insert({
      text,
      num,
      time,
      date: dateFromNow(num, time),
    });
  },
  'todos.complete'({ _id, num, time }) {
    Todos.update({ _id }, {
      $set: {
        date: dateFromNow(num, time),
      }
    });
  },
})
