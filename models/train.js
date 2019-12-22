var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrainSchema = new Schema({
  x_coordinate: { type: Number, required: true, max: 100 },
  y_coordinate: { type: Number, required: true, max: 100 },
  at_distance_1: { type: Number, required: false, max: 100 },
  at_distance_2: { type: Number, required: false, max: 100 },
  at_distance_3: { type: Number, required: false, max: 100 },
  rssi_value_1: { type: Number, required: false, max: 100 },
  rssi_value_2: { type: Number, required: false, max: 100 },
  rssi_value_3: { type: Number, required: false, max: 100 }
});

// Export model.
module.exports = mongoose.model('Train', TrainSchema);
