const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({}, { strict: false });

// Export model.
module.exports = mongoose.model('Device', DeviceSchema);
