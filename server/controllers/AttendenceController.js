const Attendance = require('../models/Attendance');

// Create new attendance record
exports.createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({ 
            message: error.message,
            success:false
        });
    }
};

// Get all attendance records
exports.getAllAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.status(200).json(attendanceRecords);
    } catch (error) {
        res.status(500).json({ 
            message: error.message,
        success:false
     });
    }
};

// Get attendance record by ID
exports.getAttendanceById = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id);
        if (!attendance) {
            return res.status(404).json({ 
                message: 'Attendance record not found' 
            });
        }
        res.status(200).json(attendance);
    } catch (error) {
        res.status(500).json({ 
            message: error.message
         });
    }
};

// Update attendance record
exports.updateAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!attendance) {
            return res.status(404).json({ 
                message: 'Attendance record not found' 
            });
        }
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ 
            message: error.message 
        });
    }
};

// Delete attendance record
exports.deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!attendance) {
            return res.status(404).json({ 
                message: 'Attendance record not found' 
            });
        }
        res.status(204).json({
            success:true,
            message:"successfully deleted"
        });
    } catch (error) {
        res.status(400).json({ success:false,
            message: error.message 
        });
    }
};
