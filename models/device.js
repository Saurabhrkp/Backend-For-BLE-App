var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, max: 100 },
  region: { type: String, required: true },
  txpower: { type: String, required: true }
});

// Export model.
module.exports = mongoose.model('Device', DeviceSchema);
