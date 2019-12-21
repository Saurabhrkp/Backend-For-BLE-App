var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  age: { type: Number, required: true, max: 100 }
});

// Export model.
module.exports = mongoose.model('Data', DataSchema);
