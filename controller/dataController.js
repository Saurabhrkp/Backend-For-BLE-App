var Device = require('./../models/device');

exports.post = function(req, res, next) {
  const Data = Object.values(req.body);
  for (var device in Data) {
    new Device(Data[device]).save().catch(err => {
      console.log(err.message);
    });
  }
  res.status(200).json('Good!');
};

exports.demo = function(req, res, next) {
  const Data = Object.values(req.body);
  console.log(Data);
  const Data1 = JSON.stringify(req.body);
  console.log(Data1);
  console.log(req.body);
  const result = Data.reduce((acc, item) => {
    acc['region'] = item.region;
    acc[item.name] = item.rssi;
    return acc;
  }, {});
  console.log(result);
  let obj = {};
  for (i in Data) {
    obj.region = Data[i].region;
    obj[Data[i].name] = Data[i].rssi;
  }
  console.log(obj);

  res.status(200).json('Good!');
};
