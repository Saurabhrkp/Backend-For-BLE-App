var Device = require('./../models/device');

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
  const readings = Object.values(req.body);
  const result = readings.reduce(
    (acc, { name, region, rssi }) => ({ ...acc, region, [name]: rssi }),
    {}
  );
  console.log(result);
  res.status(200).json('Good!');
};
