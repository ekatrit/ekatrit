const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    insertTs: { type: Date, default: Date.now },
    updateTs: { type: Date, default: Date.now }
    // add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;