// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connection successful');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;