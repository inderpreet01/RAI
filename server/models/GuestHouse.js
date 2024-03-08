const guestHouseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    }
});

const GuestHouse = mongoose.model('GuestHouse', guestHouseSchema);


