const LeaveRequest = require('../models/LeaveRequest');

// Create a new leave request
exports.createLeaveRequest = async (req, res) => {
    try {
        const leaveRequest = new LeaveRequest(req.body);
        await leaveRequest.save();
        res.status(201).json(leaveRequest);
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
};

// Get all leave requests
exports.getAllLeaveRequests = async (req, res) => {
    try {
        const leaveRequests = await LeaveRequest.find();
        res.status(200).json(leaveRequests);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

// Get leave request by ID
exports.getLeaveRequestById = async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if (!leaveRequest) {
            return res.status(404).json({ 
                message: 'Leave request not found'
             });
        }
        res.status(200).json(leaveRequest);
    } catch (error) {
        res.status(500).json({ 
            message: error.message 
        });
    }
};

// Update leave request
exports.updateLeaveRequest = async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.findByIdAndUpdate(req.params.id, req.body, 
            { new: true });
        if (!leaveRequest) {
            return res.status(404).json({ 
                message: 'Leave request not found' 
            });
        }
        res.status(200).json(leaveRequest);
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
};

// Delete leave request
exports.deleteLeaveRequest = async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.findByIdAndDelete(req.params.id);
        if (!leaveRequest) {
            return res.status(404).json({ 
                message: 'Leave request not found'
             });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ 
            message: error.message
         });
    }
};
