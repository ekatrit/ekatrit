const express = require('express');
const userService = require('../services/userService'); 

const router = express.Router();

router.post('/login', async (req, res) => {
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    let userDetails = await userService.findUser(user);
    res.status(200).send(userDetails);
});

router.post('/signup', async (req, res) => {
    let user = {
        userName: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    await userService.saveUser(user);
    res.status(201).send({msg: 'User created'});
});



module.exports = router;