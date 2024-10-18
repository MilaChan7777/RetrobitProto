const db = require("../db");
 const { CreateUserHandler, JoinGameHandler,StartTriviaHandler,AnswerOptionsHandler ,StartGameHandler ,ActionPulseHandler ,DefeatHandler ,VictoryHandler ,RewardHandler, CodeQrHandler,QuestionHandler,CheckupHandler,ExitHandler } = require("../Events-handler/User-experienceHandler");

const UserEvent = (socket, io) => {
  socket.on("JoinGame", JoinGameHandler(socket, db, io));
  socket.on("CreateUser", CreateUserHandler(socket, db, io));
  socket.on("AnswerOptions", AnswerOptionsHandler(socket, db, io));
  socket.on("StartGame", StartGameHandler(socket, db, io));
  socket.on("ActionPulse", ActionPulseHandler(socket, db, io));
  socket.on("Defeat", DefeatHandler(socket, db, io));
  socket.on("Victory", VictoryHandler(socket, db, io));
  socket.on("Reward", RewardHandler(socket, db, io));
  socket.on("CodeQr",CodeQrHandler(socket, db, io));
  socket.on("Question",QuestionHandler(socket, db, io));
  socket.on("Checkup",CheckupHandler(socket, db, io));
  socket.on("Exit",ExitHandler(socket, db, io));
  socket.on("StartTrivia",StartTriviaHandler(socket, db, io));
};

module.exports = { UserEvent };
