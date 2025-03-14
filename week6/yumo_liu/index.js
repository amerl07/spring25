const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { //WHEN connecting
  console.log('A user connected');

  socket.on("set nickname", (nickname) => { // event when user enters & set nickname
    socket.nickname = nickname; // store nickname on the server
    console.log(`${nickname} joined the chat`); // appears in terminal
    
    io.emit('chat message', { //sending an OBJECT through 'chat message' event
    nickname: "System",
    message: `${nickname} has joined the chat`,
    timestamp: new Date().toISOString() //log a timestamp when user joins
  });
});

  socket.on('chat message', (msg) => { // event WHEN user sends a message
    io.emit('chat message', { 
      nickname: socket.nickname || "Anonymous", // Use nickname if set, otherwise default to "Anonymous"
      message: msg, //Actual message text
      timestamp: new Date().toISOString()
    }); //this event is received in client side as 'chatData' object
  });

  socket.on('disconnect', () => { // event WHEN disconnecting
    console.log('A user disconnected');
    const userNickname = socket.nickname || "Anonymous"
    io.emit('chat message', { //sending an OBJECT through 'chat message' event
      nickname: "System",
      message: `${userNickname} has left the chat`, //like an f-string
      timestamp: new Date().toISOString() //log a timestamp when user leaves
    });
  });
});
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});