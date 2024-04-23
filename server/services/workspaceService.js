const { Workspace, WorkspaceAccess } = require('../models/workspace');
const constants = require('../common/constant');


async function saveWorkspace(workspaceDetails) {
    const newWs = new Workspace({
        "workspaceName": workspaceDetails.name,
        "createdByUserId": workspaceDetails.createdByUserId
    });

    let wsRes = await newWs.save();

    let newWSAc = new WorkspaceAccess({
        "user": workspaceDetails.createdByUserId,
        "workspace": wsRes._id,
        "role": constants.ADMIN
    });
    await newWSAc.save();
}

async function getAllWorkspaceByUserId(userId) {
    const workspaceAccess = await WorkspaceAccess.find({ user: userId }).populate('workspace');
    const workspaces = workspaceAccess.map(access => ({
        workspaceName: access?.workspace?.workspaceName,
        workspaceId: access?.workspace?._id,
        roleType: access?.role
    }));
    return workspaces;
}





module.exports = {
    saveWorkspace,
    getAllWorkspaceByUserId
};