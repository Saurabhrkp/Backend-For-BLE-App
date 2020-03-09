var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({}, { strict: false });

// Export model.
module.exports = mongoose.model('Device', DeviceSchema);
