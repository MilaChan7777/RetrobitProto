//const { exampleEvent } = require("./exampleEvents")
const { ScreenEvent } = require("../Events/Screen-Publicity")
const { ServerEvent } = require("../Events/Server-Event")
const { UserEvent } = require("../Events/User-experience")


const handleEvents = (socket, io) => {
  // exampleEvent(socket, io)
  //ScreenEvent(socket, io)
  //ServerEvent(socket, io)
  UserEvent(socket, io)
}

module.exports = { handleEvents }
