const KNN = require('ml-knn');
const model = require('./knn.json');

const knn = KNN.load(model);

const dataset = [
  [-80, -41, -51, -44],
  [-51, -72, -43, -54]
];

const ans = knn.predict(dataset);

console.log(ans);
