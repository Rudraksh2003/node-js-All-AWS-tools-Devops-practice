// index.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Greeting = require('./models/Greeting');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Hi', err));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to get the greeting from the database
app.get('/greeting', async (req, res) => {
  try {
    const greeting = await Greeting.findOne(); // Get the first greeting
    res.json(greeting);
  } catch (err) {
    res.status(500).send('Error retrieving greeting from database');
  }
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
