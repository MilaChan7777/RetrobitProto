const { Server } = require("socket.io");
const { handleEvents } = require("./Events");

let io;

const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    path: "/real-time",
    cors: {
      origin: "*", // Allow requests from any origin
    },
  }); // Creates a WebSocket server

  io.on("connection", (socket) => {
    console.log("Nuevo cliente conectado");
    handleEvents(socket, io);
    
    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};

module.exports = { initSocket, getIO };

