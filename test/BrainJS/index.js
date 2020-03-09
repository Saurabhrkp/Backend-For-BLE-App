const brain = require('brain.js');
const fs = require('fs');

// provide optional config object (or undefined). Defaults shown.
const config = {
  binaryThresh: 0.5,
  hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01 // supported for activation type 'leaky-relu'
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);

net.train([
  { input: { r: 0.03, g: 0.7 }, output: { black: 1 } },
  { input: { r: 0.16, b: 0.2 }, output: { white: 1 } },
  { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } }
]);

const output = net.run({ r: 1, g: 0.4, b: 0 });
console.log(output);

const json = net.toJSON();

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

storeData(json, 'brain.json');
