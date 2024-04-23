const express = require('express');

const { connectDB } = require('../models/db');
const userRoute = require('../routes/userRoute');
const workspaceAndProjectRoute = require('../routes/workspaceAndProjectRoute');
const router = express.Router();

connectDB();

router.use('/', userRoute);
router.use('/', workspaceAndProjectRoute);

module.exports = router;