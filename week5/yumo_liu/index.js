const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    io.emit('chat message', 'A new user has joined the chat');
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
      io.emit('chat message', 'A user has left the chat');
    });
  
    socket.on('chat message', (msg) => {
      io.emit('chat message', `${socket.nickname}: ${msg}`); //adds the stored nickname before the message
    });

    socket.on("set nickname", (nickname) => {
        socket.nickname = nickname; //stores the nickname in server. In this file because in backend.
        console.log(`${nickname} joined the chat`); //appears in terminal
      });      
      
  });
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});