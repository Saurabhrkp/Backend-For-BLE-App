var Data = require('./../models/data');
// var async = require('async');

// Display list of all Data.
exports.Data_get = function(req, res, next) {
  Data.find()
    .sort([['name', 'ascending']])
    .exec(function(err, list_data) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      res.send(list_data);
      console.log('DATA GET');
    });
};

exports.Data_post = function(req, res, next) {
  // Create Data object with escaped and trimmed data
  var data = new Data({
    name: req.body.name,
    age: req.body.age
  });

  // Save data.
  data.save(function(err) {
    if (err) {
      return next(err);
    }
    // Successful - redirect to new data record.
    res.send({
      name: req.body.name,
      age: req.body.age,
      status: 'POST data successful!'
    });
    console.log('DATA POST');
  });
};
