const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const app = express();
const server = http.createServer(app);
const port = 3000;
const path = require("path");
const io = socketio(server);
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));
let count = 0;
io.on("connection", (socket) => {
  //socket is the current user that has been added
  console.log("new connection");
  socket.emit("count", count);
  socket.on("increment", () => {
    count++;
    io.emit("count", count); // by using io it will be going to all
  });
});

server.listen(port, () => {
  console.log("running");
});
