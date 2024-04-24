const express = require('express');
const userService = require('../services/userService');
const { generateToken } = require('../services/authService');

const router = express.Router();

router.post('/api/v1/login', async (req, res) => {
    try {
        let user = {
            email: req.body.email,
            password: req.body.password
        };
        let userDetails = await userService.findUser(user);
        if (userDetails) {
            // Generate a JWT with the user's ID as the payload
            console.log("userDetails" + JSON.stringify(userDetails));
            const token = generateToken(userDetails);
            res.status(200).send({ token });
        } else {
            res.status(401).send({ msg: 'Invalid credentials' });
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(401).send({ msg: 'Invalid credentials' });
    }
});

router.post('/api/v1/signup', async (req, res) => {
    try {
        let user = {
            userName: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        await userService.saveUser(user);
        res.status(201).send({ msg: 'User created' });
    } catch (error) {
        console.log('Error:', error);
    }
});



module.exports = router;