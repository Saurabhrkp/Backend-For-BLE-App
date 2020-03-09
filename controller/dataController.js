var Device = require('./../models/device');

const model = require('../test/knn.json');
const KNN = require('ml-knn');

const knn = KNN.load(model);

// const brain = require('brain.js');
// const model = require('../test/BrainJS/brain.json');

// provide optional config object (or undefined). Defaults shown.
// const config = {
//   binaryThresh: 0.5,
//   hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
//   activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
//   leakyReluAlpha: 0.01 // supported for activation type 'leaky-relu'
// };

// const net = new brain.NeuralNetwork(config);
// const JSON = net.fromJSON(model);

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
  // const output = JSON.run(req.body);
  // console.log(output);
  res.status(200).json('Good!');
};
