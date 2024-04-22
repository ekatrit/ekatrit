// app.js
const express = require('express');
const cors = require('cors');
const init = require('./services/init');

const app = express();
app.use(cors());
app.use(express.json()); 

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'Healthy' });
});
app.use('/', init); 

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});