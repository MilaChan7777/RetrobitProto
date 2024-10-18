import { socket } from "./socket.js"; // Asegúrate de tener tu archivo socket.js configurado

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>5/5</h1>
    <button id="triangle">Volar</button>
    <button id="diamond">Absorber habilidades</button>
    <button id="circle">Correr rápido</button>
    <button id="square">Lanzar bolas de fuego</button>
  `;

  document.getElementById("triangle").addEventListener("click", () => {
    socket.emit("answer", "A"); // Si selecciona Volar
  });

  document.getElementById("diamond").addEventListener("click", () => {
    socket.emit("answer", "B"); // Si selecciona Absorber habilidades
  });

  document.getElementById("circle").addEventListener("click", () => {
    socket.emit("answer", "C"); // Si selecciona Correr rápido
  });

  document.getElementById("square").addEventListener("click", () => {
    socket.emit("answer", "D"); // Si selecciona Lanzar bolas de fuego
  });
}
