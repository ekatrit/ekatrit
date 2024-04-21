const express = require('express');
const workspaceService = require('../services/workspaceService');
const projectService = require('../services/projectService');

const router = express.Router();

router.post('/workspace', async (req, res) => {
   
    res.status(200).send({ msg: 'Workspace created' });
});

router.post('/project', async (req, res) => {
    res.status(200).send({ msg: 'Project created' });

});



module.exports = router;