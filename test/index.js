const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');
let knn;
const csvFilePath = 'wine.csv'; // Data
const names = [
  'class',
  'Alcohol',
  'Malic',
  'Ash',
  'Alcalinity',
  'Magnesium',
  'phenols',
  'Flavanoids',
  'Nonflavanoid',
  'Proanthocyanins',
  'Color',
  'Hue',
  'diluted',
  'Proline'
]; // For header

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
  /**
   * There are Wine recognition data
   * that this dataset classifies.
   *
   * 1) Alcohol
   * 2) Malic acid
   * 3) Ash
   * 4) Alcalinity of ash
   * 5) Magnesium
   * 6) Total phenols
   * 7) Flavanoids
   * 8) Nonflavanoid phenols
   * 9) Proanthocyanins
   * 10)Color intensity
   * 11)Hue
   * 12)OD280/OD315 of diluted wines
   * 13)Proline
   *
   * We are going to change these classes from Strings to numbers.
   * Such that, a value of type equal to
   * class 1 59
   * class 2 71
   * class 3 48
   */

  let types = new Set(); // To gather UNIQUE classes

  data.forEach(row => {
    types.add(row.class);
  });

  typesArray = [...types]; // To save the different types of classes.

  data.forEach(row => {
    let rowArray, typeNumber;

    rowArray = Object.keys(row)
      .map(key => parseFloat(row[key]))
      .slice(0, 4);

    typeNumber = typesArray.indexOf(row.class); // Convert type(String) to type(Number)

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
  knn = new KNN(trainingSetX, trainingSetY, { k: 14 });
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

  prompt.get(
    [
      'Alcohol',
      'Malic',
      'Ash',
      'Alcalinity',
      'Magnesium',
      'phenols',
      'Flavanoids',
      'Nonflavanoid',
      'Proanthocyanins',
      'Color',
      'Hue',
      'diluted',
      'Proline'
    ],
    function(err, result) {
      if (!err) {
        for (var key in result) {
          temp.push(parseFloat(result[key]));
        }
        console.log(`With ${temp} -- class =  ${knn.predict(temp)}`);
      }
    }
  );
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
