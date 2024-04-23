const express = require('express');
const workspaceService = require('../services/workspaceService');
const projectService = require('../services/projectService');
const authSer = require('../services/authService');

const router = express.Router();
let auth = authSer.authenticate;
router.post('/api/v1/workspace', auth, async (req, res) => {
    let wsDetails = {
        name: req.body.workspaceName,
        createdByUserId: req.user.id
    }
    await workspaceService.saveWorkspace(wsDetails);
    let allWs = await workspaceService.getAllWorkspaceByUserId(wsDetails.createdByUserId);
    res.status(200).send({ workspace: allWs });
});

//get all workflows for that user
router.get('/api/v1/workspace', auth, async (req, res) => {
    let userId = req.user.id;
    console.log(userId);
    let allWs = await workspaceService.getAllWorkspaceByUserId(userId);
    res.status(200).send({ workspace: allWs });
});

router.get('/api/v1/workspace/:workflowid', auth, async (req, res) => {

});
router.post('/api/v1/project', auth, async (req, res) => {

    let pjDetails = {
        name: req.body.projectName,
        workspaceId: req.body.workspaceId,
        createdByUserId: req.user.id

    }
    await projectService.saveProject(pjDetails);
    let allPj = await projectService.getProjectByWorkSpaceId(pjDetails.workspaceId);
    res.status(200).send({ project: allPj });
});

router.get('/api/v1/project', auth, async (req, res) => {
    let workspaceId = req.query.workspaceId;
    let allPj = await projectService.getProjectByWorkSpaceId(workspaceId);
    res.status(200).send({ project: allPj });
});


module.exports = router;