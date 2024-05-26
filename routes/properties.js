const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleWare');
const Property = require('../models/property');

// Post a new property
router.post('/', protect, async (req, res) => {
    const { area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = new Property({
            owner: req.user._id,
            area,
            bedrooms,
            bathrooms,
            nearbyHospitals,
            nearbyColleges
        });
        const createdProperty = await property.save();
        res.status(201).json(createdProperty);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().populate('owner', 'firstName lastName email phoneNumber');
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get property By Ud
router.get('/:id', async (req, res) => {
    try {
        const properties = await Property.findById(req.params.id);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a property
router.put('/:id', protect, async (req, res) => {
    const { area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = await Property.findById(req.params.id);
        if (property && property.owner.equals(req.user._id)) {
            property.area = area;
            property.bedrooms = bedrooms;
            property.bathrooms = bathrooms;
            property.nearbyHospitals = nearbyHospitals;
            property.nearbyColleges = nearbyColleges;
            const updatedProperty = await property.save();
            res.json(updatedProperty);
        } else {
            res.status(404).json({ message: 'Property not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a property
router.delete('/:id', protect, async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (property && property.owner.equals(req.user._id)) {
            await Property.findByIdAndDelete(req.params.id)
            res.json({ message: 'Property removed' });
        } else {
            res.status(404).json({ message: 'Property not found' });
        }
    } catch (error) {
        console.log('err', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
