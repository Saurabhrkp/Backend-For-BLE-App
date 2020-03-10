const KNN = require('ml-knn');
const model = require('./trained.json');

const knn = KNN.load(model);

const dataset = [
  [-80, -41, -51],
  [-51, -72, -43]
];

const ans = knn.predict(dataset);

console.log(ans);
