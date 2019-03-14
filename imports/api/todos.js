import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { dateFromNow } from './datecalc.js';

export default Todos = new Mongo.Collection('todos');

if (Meteor.isServer) {
  Meteor.publish('todos', _ => {
    return Todos.find();
  });
}

const SCHEMA = {
  _id: {
    type: String,
  },
  text: {
    type: String,
    min: 1,
    max: 50,
  },
  num: {
    type: Number,
    min: 1,
  },
  time: {
    type: String,
  },
  date: {
    type: Number,
  },
};

Meteor.methods({
  'todos.add'({ text, num, time }) {

    new SimpleSchema({
      text: SCHEMA.text,
      num: SCHEMA.num,
      time: SCHEMA.time,
    }).validate({ text, num, time });

    Todos.insert({
      text,
      num,
      time,
      date: dateFromNow(num, time),
    });
  },
  'todos.complete'({ _id, num, time }) {

    new SimpleSchema({
      _id: SCHEMA._id,
      num: SCHEMA.num, 
      time: SCHEMA.time,
    }).validate({ _id, num, time });

    Todos.update({ _id }, {
      $set: {
        date: dateFromNow(num, time),
      }
    });
  },
  'todos.remove'({ _id }) {
    
    new SimpleSchema({
      _id: SCHEMA._id,
    }).validate({ _id });

    Todos.remove({ _id });
  },
});
