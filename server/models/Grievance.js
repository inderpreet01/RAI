const grievanceSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true },
    date: { 
        type: Date, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Open', 'Resolved'], 
        required: true 
    },
    resolutionNotes: { 
        type: String 
    }
});

const Grievance = mongoose.model('Grievance', grievanceSchema);
