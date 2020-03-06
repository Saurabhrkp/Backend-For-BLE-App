var Device = require('./../models/device');

exports.post = function(req, res, next) {
  const Data = Object.values(req.body);
  for (var device in Data) {
    new Device(Data[device]).save().catch(err => {
      console.log(err.message);
    });
  }
  res.status(200).json('Good!');
};

exports.demo = function(req, res, next) {
  const Data = Object.values(req.body);
  for (var device in Data) {
    new Device(Data[device]).save().catch(err => {
      console.log(err.message);
    });
  }
  res.status(200).json('Good!');
};
