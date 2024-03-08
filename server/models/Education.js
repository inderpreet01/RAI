const educationSchema = new mongoose.Schema({
    type: { 
        type: String,
        required: true 
    },
    name: { 
        type: String,
        required: true
    },
    startYear: { 
        type: Date,
        required: true 
    },
    endYear: { 
        type: Date,
        required: true 
    },
    institutionName: { 
        type: String,
        required: true 
    },
    fileUpload:{
        type: String,
        required: true 
    }
});
const Education = mongoose.model('Education', educationSchema);
