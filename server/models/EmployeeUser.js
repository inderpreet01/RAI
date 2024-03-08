const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    contactInfo: { 
        type: String, 
        required: true 
    },
    position: { 
        type: String, 
        required: true 
    },
    department: { 
        type: String, 
        required: true 
    },
    dateOfJoining: { 
        type: Date, 
        required: true 
    }
});

const Employee = mongoose.model('Employee', employeeSchema);