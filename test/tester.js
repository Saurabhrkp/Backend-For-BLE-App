const fetch = require('node-fetch');

var dataset = [
  [0, 0, 0],
  [2, 2, 2]
];

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
