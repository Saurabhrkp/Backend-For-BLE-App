const KNN = require('ml-knn');
const fs = require('fs');

var dataset = [
  [-78, -52, -53, -53],
  [-77, -53, -51, -51],
  [-76, -55, -56, -53],
  [-75, -51, -57, -51],
  [-78, -41, -52, -42],
  [-79, -43, -51, -43],
  [-79, -42, -52, -41],
  [-80, -41, -51, -44],
  [-51, -71, -41, -51],
  [-48, -72, -42, -52],
  [-48, -72, -41, -53],
  [-51, -73, -44, -53]
];
var predictions = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
var knn = new KNN(dataset, predictions);

var dataset = [
  [-80, -41, -51, -44],
  [-51, -72, -43, -54]
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
