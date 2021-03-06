const Device = require('./../models/device');
const KNN = require('ml-knn');

const model = require('../test/trainedClass.json');
const knn = KNN.load(model);

exports.post = function(req, res, next) {
  const readings = Object.values(req.body);
  const result = readings.reduce(
    (acc, { name, region, rssi }) => ({ ...acc, region, [name]: rssi }),
    {}
  );
  const { ' M30s': beacon3, beacon1, Beacon2, region } = result;
  const data = { b1: beacon1, b2: Beacon2, b3: beacon3, region: region };
  const device = new Device(data);
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
  const { ' M30s': beacon3, beacon1, Beacon2 } = result;
  const data = { b1: beacon1, b2: Beacon2, b3: beacon3 };
  reads = Object.values(data);
  console.log(reads);
  const ans = knn.predict(reads);
  console.log(ans);
  // switch (ans) {
  //   case 0:
  //     break;
  //   case 1:
  //     break;
  //   case 2:
  //     break;
  //   case 3:
  //     break;
  //   default:
  //     break;
  // }
  res.status(200).json(ans);
};
