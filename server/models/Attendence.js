const attendanceSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    timeIn: { 
        type: String, 
        required: true 
    },
    timeOut: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Present', 'Absent'], 
        required: true 
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
