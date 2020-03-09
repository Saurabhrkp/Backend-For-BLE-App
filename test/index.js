const KNN = require('ml-knn');
const fs = require('fs');

var dataset = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0],
  [2, 2, 2],
  [1, 2, 2],
  [2, 1, 2]
];
var predictions = [0, 0, 0, 1, 1, 1];
var knn = new KNN(dataset, predictions);

var dataset = [
  [0, 0, 0],
  [2, 2, 2]
];

var ans = knn.predict(dataset);

console.log(ans);

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

storeData(knn, 'knn.json');
