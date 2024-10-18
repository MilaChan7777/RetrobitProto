import { socket } from "./socket.js"; // Asegúrate de tener tu archivo socket.js configurado

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>1/5</h1>
    <button id="triangle">Game Boy</button>
    <button id="diamond"Nintendo 64</button>
    <button id="circle">NES</button>
    <button id="square">Color TV Game</button>
  `;

  document.getElementById("triangle").addEventListener("click", () => {
    socket.emit("answer", "A");
  });

  document.getElementById("diamond").addEventListener("click", () => {
    socket.emit("answer", "B");
  });

  document.getElementById("circle").addEventListener("click", () => {
    socket.emit("answer", "C");
  });

  document.getElementById("square").addEventListener("click", () => {
    socket.emit("answer", "D");
  });
}
