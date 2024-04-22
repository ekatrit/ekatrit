const express = require('express');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const router = express.Router();

router.post('/api/v1/login', async (req, res) => {
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    let userDetails = await userService.findUser(user);
    if (userDetails) {
        // Generate a JWT with the user's ID as the payload
        const token = jwt.sign({ id: userDetails._id }, 'your-secret-key');
        res.status(200).send({ token });
    } else {
        res.status(401).send({ msg: 'Invalid credentials' });
    }
});

router.post('/api/v1/signup', async (req, res) => {
    let user = {
        userName: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    await userService.saveUser(user);
    res.status(201).send({ msg: 'User created' });
});



module.exports = router;