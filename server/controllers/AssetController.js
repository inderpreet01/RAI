const Asset = require('../models/Asset');

// Create a new asset
exports.createAsset = async (req, res) => {
    try {
        const asset = new Asset(req.body);
        await asset.save();
        res.status(201).json(asset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all assets
exports.getAllAssets = async (req, res) => {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get asset by ID
exports.getAssetById = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update asset
exports.updateAsset = async (req, res) => {
    try {
        const asset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete asset
exports.deleteAsset = async (req, res) => {
    try {
        const asset = await Asset.findByIdAndDelete(req.params.id);
        if (!asset) {
            return res.status(404).json({ message: 'Asset not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
