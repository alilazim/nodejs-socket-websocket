const net = require('net');

// Connect to a server @ port 9898
const client = net.createConnection({ port: 9898 }, () => {
  console.log('CLIENT 01: I connected to the server.\n\n');

  for (let i = 0; i < 5; i++){
    setTimeout(function () {
      client.write('CLIENT 01: Hello this is client!');
      client.on('data', (data) => {
        console.log('Received from server: %s\n\n', data.toString());
       
      });
    }, 20000);        
  }
  
});

//client.end();

client.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
});
