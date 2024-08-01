// models/Greeting.js
const mongoose = require('mongoose');

const GreetingSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Greeting = mongoose.model('Greeting', GreetingSchema);

module.exports = Greeting;
