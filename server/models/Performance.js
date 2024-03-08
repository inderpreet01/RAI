const performanceReviewSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true 
    },
    reviewDate: { 
        type: Date, 
        required: true 
    },
    reviewer: { 
        type: String, 
        required: true 
    },
    goals: { 
        type: String 
    },
    ratings: { 
        type: Number 
    },
    feedback: { 
        type: String 
    }
});

const PerformanceReview = mongoose.model('PerformanceReview', performanceReviewSchema);
