// let io = app.get('io');
module.exports = io => {
  io.on('connection', socket => {
    console.log('New Connection has been made.');

    socket.on('x_co', x => {
      console.log(x);
    });

    socket.on('disconnect', () => {
      console.log('Connection has been disconnected');
    });
  });

  // put any other code that wants to use the io variable
  // in here
};
