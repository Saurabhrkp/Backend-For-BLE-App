const KNN = require('ml-knn');
const fs = require('fs');

var dataset = [
  [10, 0.5068958512233102, 16],
  [12, 0.5105356367730379, 16],
  [12, 0.5323562633463617, 16],
  [40, 0.517546804614676, 16],
  [48, 0.5158030616769878, 16],
  [83, 0.5262942735596369, 16],
  [80, 0.5362942735596369, 16],
  [97, 0.5281527464327415, 16],
  [98, 0.5148717143151224, 16],
  [99, 0.5248717143151224, 16],
  [100, 0.5148717143151224, 16],
  [98, 0.5448717143151224, 16],
  [98, 0.5648717143151224, 16],
  [94, 0.5148717143151224, 16],
  [98, 0.52148717143151224, 16]
];
var predictions = [1, 7, 7, 2, 2, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5];
var knn = new KNN(dataset, predictions);

var dataset = [
  [15, 0.52, 16],
  [11, 0.5, 16]
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
