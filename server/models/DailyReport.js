const dailyReportSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    hoursWorked: { 
        type: Number 
    },
    tasksAccomplished: { 
        type: String 
    },
    notes: { 
        type: String 
    }
});

const DailyReport = mongoose.model('DailyReport', dailyReportSchema);
