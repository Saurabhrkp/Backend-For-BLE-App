function isWebBLEAvailable() {
  if (!navigator.bluetooth) {
    console.log('Web Bluetooth is not avaiable!');
    return false;
  }
  return true;
}

// function getDeviceInfo() {
//   let options = {
//     acceptAllDevices: true
//   };
//   console.log('Requesting BLE device info...');
//   navigator.bluetooth
//     .requestDevice(options)
//     .then(device => {
//       console.log('Name: ' + device.name);
//     })
//     .catch(error => {
//       console.log('Request device error: ' + error);
//     });
// }

document.querySelector('form').addEventListener('submit', function(event) {
  event.stopPropagation();
  event.preventDefault();
  if (isWebBLEAvailable()) {
    call();
  }
});

var known_service = 'A service in the iBeacon’s GATT server';
return navigator.bluetooth
  .requestDevice({
    filters: [{ services: [known_service] }]
  })
  .then(device => {
    device.watchAdvertisements();
    device.addEventListener('advertisementreceived', interpretIBeacon);
  });

function interpretIBeacon(event) {
  var rssi = event.rssi;
  var appleData = event.manufacturerData.get(0x004c);
  if (appleData.byteLength != 23 || appleData.getUint16(0, false) !== 0x0215) {
    console.log({ isBeacon: false });
  }
  var uuidArray = new Uint8Array(appleData.buffer, 2, 16);
  var major = appleData.getUint16(18, false);
  var minor = appleData.getUint16(20, false);
  var txPowerAt1m = -appleData.getInt8(22);
  console.log({
    isBeacon: true,
    uuidArray,
    major,
    minor,
    pathLossVs1m: txPowerAt1m - rssi
  });
}

// function recordNearbyBeacon(major, minor, pathLossVs1m) {
//   console.log(`${major}  ${minor} ${pathLossVs1m}`);
// }

// function call() {
//   let options = {
//     // filters: [
//     //   {
//     //     manufacturerData: {
//     //       0x004c: {
//     //         dataPrefix: new Uint8Array([
//     //           0x02,
//     //           0x15, // iBeacon identifier.
//     //           255,
//     //           255,
//     //           0,
//     //           0,
//     //           255,
//     //           255,
//     //           0,
//     //           0,
//     //           255,
//     //           255,
//     //           0,
//     //           0,
//     //           255,
//     //           255,
//     //           0,
//     //           0 // My beacon UUID.
//     //         ])
//     //       }
//     //     }
//     //   }
//     // ],
//     acceptAllAdvertisements: true,
//     active: true
//   };
//   navigator.bluetooth.requestLEScan(options).then(() => {
//     navigator.bluetooth.addEventListener('advertisementreceived', event => {
//       let appleData = event.manufacturerData.get(0x004c);
//       if (appleData.byteLength != 23) {
//         // Isn’t an iBeacon.
//         return;
//       }
//       let major = appleData.getUint16(18, false);
//       let minor = appleData.getUint16(20, false);
//       let txPowerAt1m = -appleData.getInt8(22);
//       let pathLossVs1m = txPowerAt1m - event.rssi;

//       recordNearbyBeacon(major, minor, pathLossVs1m);
//     });
//   });
// }
