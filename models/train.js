var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TrainSchema = new Schema({
  x_coordinate: { type: Number, required: true, max: 100 },
  y_coordinate: { type: Number, required: true, max: 100 },
  D1: { type: Number, required: false, max: 100 },
  D2: { type: Number, required: true, max: 100 },
  D3: { type: Number, required: false, max: 100 },
  R1: { type: Number, required: false, max: 100 },
  R2: { type: Number, required: true, max: 100 },
  R3: { type: Number, required: false, max: 100 }
});

// Export model.
module.exports = mongoose.model('Train', TrainSchema);
