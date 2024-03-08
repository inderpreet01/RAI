const separationSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true 
    },
    separationDate: { 
        type: Date, 
        required: true 
    },
    reason: { 
        type: String, 
        required: true 
    },
    exitInterviewNotes: { 
        type: String 
    }
});

const Separation = mongoose.model('Separation', separationSchema);
