const KNN = require('ml-knn');
const csv = require('csvtojson/v1');
const prompt = require('prompt');
let knn;
const csvFilePath = 'dataset.csv'; // Data
const names = ['region', 'beacon1', 'beacon2', 'beacon3']; // For header

const csvFilePath = 'test.csv'; // Data
const names = ['beacon1', 'beacon2', 'beacon3', 'region']; // For header

let knn;
let seperationSize; // To seperate training and test data

let data = [],
  X = [],
  y = [];

let trainingSetX = [],
  trainingSetY = [],
  testSetX = [],
  testSetY = [];

csv({ noheader: true, headers: names })
  .fromFile(csvFilePath)
  .on('data', jsonObj => {
    data.push(jsonObj); // Push each object to data Array
  })
  .on('done', error => {
    seperationSize = 0.7 * data.length;
    data = shuffleArray(data);
    dressData();
  });

function dressData() {
  let regions = new Set(); // To gather UNIQUE classes

  data.forEach(row => {
    regions.add(row.region);
  });

  typesArray = [...regions]; // To save the different regions of classes.

  data.forEach(row => {
    let rowArray, typeNumber;

    rowArray = Object.keys(row)
      .map(key => parseFloat(row[key]))
      .slice(1, 4);

    typeNumber = typesArray.indexOf(row.region); // Convert region(String) to region(Number)

    X.push(rowArray);
    y.push(typeNumber);
  });

  trainingSetX = X.slice(0, seperationSize);
  trainingSetY = y.slice(0, seperationSize);
  testSetX = X.slice(seperationSize);
  testSetY = y.slice(seperationSize);

  train();
}

function train() {
  knn = new KNN(trainingSetX, trainingSetY, { k: 7 });
  test();
}

function test() {
  const result = knn.predict(testSetX);
  const testSetLength = testSetX.length;
  const predictionError = error(result, testSetY);
  console.log(
    `Test Set Size = ${testSetLength} and number of Misclassifications = ${predictionError}`
  );
  predict();
}

function error(predicted, expected) {
  let misclassifications = 0;
  for (var index = 0; index < predicted.length; index++) {
    if (predicted[index] !== expected[index]) {
      misclassifications++;
    }
  }
  return misclassifications;
}

function predict() {
  let temp = [];
  prompt.start();

  prompt.get(['beacon1', 'beacon2', 'beacon3'], function(err, result) {
    if (!err) {
      for (var key in result) {
        temp.push(parseFloat(result[key]));
      }
      console.log(`With ${temp} -- region =  ${knn.predict(temp)}`);
    }
  });
}

/**
 * https://stackoverflow.com/a/12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
