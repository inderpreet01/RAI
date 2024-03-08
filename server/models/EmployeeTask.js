const taskProjectSchema = new mongoose.Schema({
    taskProjectName: { 
        type: String,
        required: true 
    },
    description: { 
        type: String 
    },
    deadline: { 
        type: Date 
    },
    status: { 
        type: String 
    }
});

const TaskProject = mongoose.model('TaskProject', taskProjectSchema);
