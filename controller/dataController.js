var Device = require('./../models/device');
const KNN = require('ml-knn');
const model = require('../test/knn.json');

const knn = KNN.load(model);

exports.post = function(req, res, next) {
  const readings = Object.values(req.body);
  const result = readings.reduce(
    (acc, { name, region, rssi }) => ({ ...acc, region, [name]: rssi }),
    {}
  );
  const device = new Device(result);
  device.save(function(err, device) {
    if (err) return res.send(err);
    console.log(device);
  });
  res.status(200).json('Good!');
};

exports.demo = function(req, res, next) {
  console.log(req.body);
  var ans = knn.predict(req.body);
  console.log(ans);
  res.status(200).json('Good!');
};
