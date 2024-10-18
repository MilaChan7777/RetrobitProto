import { socket } from "./socket.js"; // Asegúrate de que tu archivo socket.js esté configurado

export default function renderCompletionScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Trivia Completa</h1>
    <button id="continue">Continuar</button>
    <button id="cancel">Cancelar</button>
  `;

  // Manejo de eventos para los botones
  document.getElementById("continue").addEventListener("click", () => {
    // Emitir evento para continuar al siguiente nivel
    socket.emit("continueToNextLevel");
  });

  document.getElementById("cancel").addEventListener("click", () => {
    // Emitir evento para cancelar o regresar
    socket.emit("cancelTrivia");
  });
}

// Escuchar el evento de completación de la trivia
socket.on("triviaCompleted", () => {
  renderCompletionScreen();
});
