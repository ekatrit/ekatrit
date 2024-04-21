const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectId: { type: String, required: true },
    projectName: { type: String, required: true },
    workspace: {
        workspaceName: { type: String, required: true },
        workspaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true }
    },
    createdBy: {
        userEmail: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    insertTs: { type: Date, default: Date.now },
    updateTs: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;