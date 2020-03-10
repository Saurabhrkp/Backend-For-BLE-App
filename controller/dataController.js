const Device = require('./../models/device');
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
  const readings = Object.values(req.body);
  const result = readings.reduce(
    (acc, { name, rssi }) => ({ ...acc, [name]: rssi }),
    {}
  );
  console.log(result);
  const { Redmi6Pro, RedmiNote5, 'Redmi 7': Redmi7 } = result;
  const data = { b1: RedmiNote5, b2: Redmi6Pro, b3: Redmi7 };
  reads = Object.values(data);
  console.log(reads);
  const ans = knn.predict(reads);
  console.log(ans);
  // const output = JSON.run(req.body);
  // console.log(output);
  res.status(200).json(ans);
};
