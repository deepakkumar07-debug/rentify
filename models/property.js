const mongoose = require('mongoose');

const NearbySchema = new mongoose.Schema({
    name: { type: String, required: true },
    distance: { type: String, required: true }
});

const PropertySchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    area: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    nearbyHospitals: [NearbySchema],
    nearbyColleges: [NearbySchema]
});

module.exports = mongoose.model('Property', PropertySchema);
