const applicationSchema = new mongoose.Schema({
    jobVacancy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'JobVacancy', 
        required: true 
    },
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true 
    },
    dateApplied: { 
        type: Date, 
        required: true 
    },
    status: { 
        type: String, 
        required: true 
    }
});

const Application = mongoose.model('Application', applicationSchema);
