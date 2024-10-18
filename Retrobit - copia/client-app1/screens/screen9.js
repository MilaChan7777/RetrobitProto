import { socket } from "./socket.js"; // Asegúrate de que tu archivo socket.js esté configurado

export default function renderFailureScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Trivia Fallida</h1>
    <button id="startAgain">Start Again</button>
    <button id="cancel">Cancelar</button>
  `;

  // Manejo de eventos para los botones
  document.getElementById("startAgain").addEventListener("click", () => {
    // Emitir evento para reiniciar la trivia
    socket.emit("restartTrivia");
  });

  document.getElementById("cancel").addEventListener("click", () => {
    // Emitir evento para cancelar o regresar
    socket.emit("cancelTrivia");
  });
}

// Escuchar el evento de fallo en la trivia
socket.on("triviaFailed", () => {
  renderFailureScreen();
});
