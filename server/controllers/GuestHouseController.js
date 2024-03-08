const GuestHouse = require('../models/GuestHouse');
const Booking = require('../models/Booking');

// Create a new guest house
exports.createGuestHouse = async (req, res) => {
    try {
        const guestHouse = new GuestHouse(req.body);
        await guestHouse.save();
        res.status(201).json(guestHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all guest houses
exports.getAllGuestHouses = async (req, res) => {
    try {
        const guestHouses = await GuestHouse.find();
        res.status(200).json(guestHouses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get guest house by ID
exports.getGuestHouseById = async (req, res) => {
    try {
        const guestHouse = await GuestHouse.findById(req.params.id);
        if (!guestHouse) {
            return res.status(404).json({ message: 'Guest house not found' });
        }
        res.status(200).json(guestHouse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update guest house
exports.updateGuestHouse = async (req, res) => {
    try {
        const guestHouse = await GuestHouse.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!guestHouse) {
            return res.status(404).json({ message: 'Guest house not found' });
        }
        res.status(200).json(guestHouse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete guest house
exports.deleteGuestHouse = async (req, res) => {
    try {
        const guestHouse = await GuestHouse.findByIdAndDelete(req.params.id);
        if (!guestHouse) {
            return res.status(404).json({ message: 'Guest house not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Book guest house
exports.bookGuestHouse = async (req, res) => {
    try {
        const { guestHouseId, startDate, endDate, guestName } = req.body;
        
        // Check if guest house exists
        const guestHouse = await GuestHouse.findById(guestHouseId);
        if (!guestHouse) {
            return res.status(404).json({ message: 'Guest house not found' });
        }

        // Create a new booking
        const booking = new Booking({
            guestHouse: guestHouseId,
            startDate,
            endDate,
            guestName
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
