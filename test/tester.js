const fetch = require('node-fetch');

var dataset = [
  [-80, -41, -51, -44],
  [-51, -72, -43, -54]
];

var dataObject = { b1: -80, b2: -41, b3: -51, b4: -44 };

const postHandler = () => {
  fetch('http://192.168.1.103:3000/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataset)
  })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

postHandler();
