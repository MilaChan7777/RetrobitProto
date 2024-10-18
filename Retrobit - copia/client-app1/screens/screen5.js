import { socket } from "./socket.js"; // Asegúrate de tener tu archivo socket.js configurado

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>3/5</h1>
    <button id="triangle">Sonic</button>
    <button id="diamond">Pikachu</button>
    <button id="circle">Mario</button>
    <button id="square">Donkey Kong</button>
  `;

  document.getElementById("triangle").addEventListener("click", () => {
    socket.emit("answer", "A"); // Si selecciona Sonic
  });

  document.getElementById("diamond").addEventListener("click", () => {
    socket.emit("answer", "B"); // Si selecciona Pikachu
  });

  document.getElementById("circle").addEventListener("click", () => {
    socket.emit("answer", "C"); // Si selecciona Mario
  });

  document.getElementById("square").addEventListener("click", () => {
    socket.emit("answer", "D"); // Si selecciona Donkey Kong
  });
}
