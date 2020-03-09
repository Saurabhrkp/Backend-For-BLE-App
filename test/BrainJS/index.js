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
  { input: { b1: -78, b2: -52, b3: -53, b4: -53 }, output: { r: 1 } },
  { input: { b1: -77, b2: -53, b3: -51, b4: -51 }, output: { r: 1 } },
  { input: { b1: -76, b2: -55, b3: -56, b4: -53 }, output: { r: 1 } },
  { input: { b1: -75, b2: -51, b3: -57, b4: -51 }, output: { r: 1 } },
  { input: { b1: -78, b2: -41, b3: -52, b4: -42 }, output: { c: 1 } },
  { input: { b1: -79, b2: -43, b3: -51, b4: -43 }, output: { c: 1 } },
  { input: { b1: -79, b2: -42, b3: -52, b4: -41 }, output: { c: 1 } },
  { input: { b1: -80, b2: -41, b3: -51, b4: -44 }, output: { c: 1 } },
  { input: { b1: -51, b2: -71, b3: -41, b4: -51 }, output: { l: 1 } },
  { input: { b1: -48, b2: -72, b3: -42, b4: -52 }, output: { l: 1 } },
  { input: { b1: -48, b2: -72, b3: -41, b4: -53 }, output: { l: 1 } },
  { input: { b1: -51, b2: -73, b3: -44, b4: -53 }, output: { l: 1 } }
]);

const output = net.run({ b1: -80, b2: -41, b3: -51, b4: -44 });
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
