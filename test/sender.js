const fetch = require('node-fetch');

const ReceivedArray = [
  { id: '1D:71:6D:63:BA:D7', name: 'null', rssi: -88, region: 4 },
  { id: '68:DC:F3:AE:E1:A8', name: 'Redmi6Pro', rssi: -75, region: 4 },
  { id: '7F:93:24:D3:C1:DB', name: 'Redmi6Pro', rssi: -69, region: 4 },
  { id: '49:D0:16:DD:94:4F', name: 'Redmi6Pro', rssi: -70, region: 4 }
];
const ReceivedObject = {
  '0': { id: '1D:71:6D:63:BA:D7', name: 'null', rssi: -88, region: 4 },
  '1': { id: '68:DC:F3:AE:E1:A8', name: 'Redmi6Pro', rssi: -75, region: 4 },
  '2': { id: '7F:93:24:D3:C1:DB', name: 'Redmi6', rssi: -69, region: 4 },
  '3': { id: '49:D0:16:DD:94:4F', name: 'RedmiPro', rssi: -70, region: 4 }
};

const postHandler = () => {
  fetch('http://192.168.1.103:3000/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ReceivedObject)
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
