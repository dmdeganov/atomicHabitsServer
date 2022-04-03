const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    email: String,
    habits: Array,
    data: Object,
  },
  {
    versionKey: false, // You should be aware of the outcome after set to false
  },
);

// const UserSchema = new mongoose.Schema({ any: {} });
module.exports = mongoose.model('User', UserSchema);

const data = {
  '04-04-2022': {
    wakeUp: '07:30',
    japa: 16,
    running: true,
    gossip: false,
    youtube: 25,
  },
};
const habits = [
  {
    "name": "japa",
    "good": true,
    "type": "quantity",
    "goal": 16,
    "addedDate": "01-04-2022",
  },
  {
    name: 'youtube',
    good: false,
    type: 'time',
    goal: 40,
    addedDate: '01-04-2022'
  }
];
const frequencyTypes=['7/7', '1/7', '2/7', '1/2', '1/3', '1/4']
const types = {
  check: 'check',
  time: 'time',
  quantity: 'quantity'
}
