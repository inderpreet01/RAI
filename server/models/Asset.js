const assetSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', required: true 
    },
    assetType: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    assignedDate: { 
        type: Date, 
        required: true 
    },
    returnDate: { 
        type: Date 
    }
});

const Asset = mongoose.model('Asset', assetSchema);
