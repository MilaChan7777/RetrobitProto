//SIGUE INTENTANDO Clic en start again para empezar de nuevo

import { socket } from "../routes";

export default function renderTryAgainScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Sigue Intentando</h1>
    <p>No lograste completar la trivia.</p>
    <p>Haz clic en "Start Again" para empezar de nuevo.</p>
  `;
}

// Escuchar el evento que indica que la trivia ha terminado sin éxito
socket.on("triviaFailed", () => {
  renderTryAgainScreen();
});
