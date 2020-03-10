var obj = { b1: -80, b2: -41, b3: -51, b4: -44 };

var { b1, b2, b3, b4 } = obj;

var newObject = { b2: b2, b1: b1, b4: b4, b3: b3 };

var result = Object.values(newObject);

console.log(result);
