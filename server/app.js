// app.js
const express = require('express');
const connectDB = require('./models/db');

const app = express();

connectDB();

app.get('/health', (req, res) => {
  res.json({ status: 'Healthy' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});