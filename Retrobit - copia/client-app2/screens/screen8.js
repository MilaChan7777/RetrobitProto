// ¡Felicidades! Haz completado satisfactoriamente la trivia.
// Da clic en continuar para pasar al siguiente nivel.

import { socket } from "../routes";

export default function renderFinalScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>¡Felicidades!</h1>
    <p>Has completado satisfactoriamente la trivia.</p>
    <p>Da clic en continuar para pasar al siguiente nivel.</p>
  `;
}

// Escuchar el evento que indica que la trivia ha terminado
socket.on("triviaCompleted", () => {
  renderFinalScreen();
});
