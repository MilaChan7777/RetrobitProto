const db = require("../db");
const { StartTriviaHandler,StartGameHandler} = require("../Events-handler/Server-EventHandler");

const ServerEvent = (socket, io) => {
  socket.on("StartTrivia",StartTriviaHandler(socket, db, io));
  socket.on("StartGame",StartGameHandler(socket, db, io));
};

module.exports = { ServerEvent };
