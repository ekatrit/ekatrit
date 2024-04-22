const express = require('express');

const connectDB = require('../models/db');
const userRoute = require('../routes/userRoute');
const router = express.Router();

connectDB();

router.use('/', userRoute);

module.exports = router;