const Project = require('../models/project');
const constants = require('../common/constant');


async function saveProject(projectDetails) {
    const newPj = new Project({
        "projectName": projectDetails.name,
        "workspaceId": projectDetails.workspaceId,
        "createdByUserId": projectDetails.createdByUserId
    });

    await newPj.save();
}

async function getProjectByWorkSpaceId(workSpaceId) {
    const projects = await Project.find({ "workspaceId": workSpaceId });
    return projects;
}


module.exports = {
    saveProject,
    getProjectByWorkSpaceId
};