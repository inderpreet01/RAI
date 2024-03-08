const bookingSchema = new mongoose.Schema({
    employee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', required: true 
    },
    guestHouse: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'GuestHouse', 
        required: true 
    },
    checkInDate: { 
        type: Date, 
        required: true 
    },
    checkOutDate: { 
        type: Date, 
        required: true 
    }
});

const Booking = mongoose.model('Booking', bookingSchema);