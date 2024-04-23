const mongoose = require('mongoose');
const { autoIncrement } = require('../models/db');

const workspaceSchema = new mongoose.Schema({
    workspaceName: String,
    createdByUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    insertTs: { type: Date, default: Date.now },
    updateTs: { type: Date, default: Date.now }
    // add more fields as needed
});

const Workspace = mongoose.model('Workspace', workspaceSchema);


const workspaceAccessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    workspace: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true },
    role: { type: String, enum: ['admin', 'read', 'write'], required: true },
});

const WorkspaceAccess = mongoose.model('WorkspaceAccess', workspaceAccessSchema);


module.exports = {
    Workspace,
    WorkspaceAccess
};