const KNN = require('ml-knn');
const model = require('./knn.json');

const knn = KNN.load(model);

var dataset = [
  [0, 0, 0],
  [2, 2, 2]
];

var ans = knn.predict(dataset);

console.log(ans);
