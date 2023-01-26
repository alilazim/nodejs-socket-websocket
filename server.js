const net = require('net');

// Create a server object
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
    socket.write(data.toString());
  });

}).on('error', (err) => {
  console.error(err);
});

//socket.end('SERVER: Closing connection now.\n');

// Open server on port 9898
server.listen(9898, () => {
  console.log('opened server on', server.address().port);
});
