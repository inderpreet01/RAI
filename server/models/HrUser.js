const mongoose = require('mongoose');

const hrUserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    phoneNumber: { 
        type: String, 
        required: true 
    },
    experience: { 
        type: Number, 
        required: true 
    },
    team: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    }],
    password: { 
        type: String, 
        required: true 
    },
    confirmPassword: { 
        type: String, 
        required: true 
    },
    updatePassword: { 
        type: Boolean, 
        default: false },
    approvalOfEmployee: { 
        type: Boolean, 
        default: false
     }
});

const HRUser = mongoose.model('HRUser', hrUserSchema);

module.exports = HRUser;
