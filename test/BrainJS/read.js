const brain = require('brain.js');
const model = require('./brain.json');

// provide optional config object (or undefined). Defaults shown.
const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01 // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);

const JSON = net.fromJSON(model);

const output = JSON.run({ r: 1, g: 0.4, b: 0 });
console.log(output);
