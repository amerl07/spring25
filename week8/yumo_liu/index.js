const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// MongoDB
const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  nickname: String,
  message: String,
  timestamp: Date
});
const messageModel = mongoose.model('Message', messageSchema);

async function main() {
  await mongoose.connect('mongodb+srv://liuyumo:Liu472023089@chatappmessages.cdruj3z.mongodb.net/ChatAppDB?retryWrites=true&w=majority');
  console.log("✅ Mongoose connected to Atlas");
}
main().catch(err => console.log(err));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//This is to GET all chat messages from the DB, does not send new ones to DB
app.get('/messages', async function(req, res){
  res.json(await messageModel.find());
});


//socket.io part
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

  socket.on('chat message', async (msg) => { // event WHEN user sends a message
    const chat = {
      nickname: socket.nickname || "Anonymous", // Use nickname if set, otherwise default to "Anonymous"
      message: msg, //Actual message text
      timestamp: new Date() 
    }; //this event is received in client side as 'chatData' object
  
    await messageModel.create(chat); // Save to DB
    io.emit('chat message', chat);   // Send to everyone
  });
  
//how to use fetch api method to display old messages when entering localhost:3000???

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

//notes
//to run, type in terminal: node index.js
//go to http://localhost:3000/ for chatroom
//go to http://localhost:3000/messages for messages in DB