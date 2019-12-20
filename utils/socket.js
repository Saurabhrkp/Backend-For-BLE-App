const socketIO = require('socket.io');
const server = require('../bin/www');

var io = socketIO(server);

io.on('connection', socket => {
  console.log('New user connected');
});
