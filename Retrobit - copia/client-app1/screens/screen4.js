import { socket } from "./socket.js"; // Asegúrate de tener tu archivo socket.js configurado

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>2/5</h1>
    <button id="triangle">Zelda</button>
    <button id="diamond">Link</button>
    <button id="circle">Ganon</button>
    <button id="square">Tingle</button>
  `;

  document.getElementById("triangle").addEventListener("click", () => {
    socket.emit("answer", "A"); // Si selecciona Zelda
  });

  document.getElementById("diamond").addEventListener("click", () => {
    socket.emit("answer", "B"); // Si selecciona Link
  });

  document.getElementById("circle").addEventListener("click", () => {
    socket.emit("answer", "C"); // Si selecciona Ganon
  });

  document.getElementById("square").addEventListener("click", () => {
    socket.emit("answer", "D"); // Si selecciona Tingle
  });
}
