// PREGUNTA 5
// ¿Cuál es la principal habilidad de Kirby?
//Respuestas: 
// Triángulo, Volar
// Rombo, Absorber habilidades
// Círculo, Correr rápido
// Cuadrado, Lanzar bolas de fuego

import { socket } from "../routes.js";

export default function renderScreen12() { // Cambia el nombre a renderScreen12 o como desees
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>PREGUNTA 5</h1>
    <p>¿Cuál es la principal habilidad de Kirby?</p>
    <button id="optionA">1. Volar</button>
    <button id="optionB">2. Absorber habilidades</button>
    <button id="optionC">3. Correr rápido</button>
    <button id="optionD">4. Lanzar bolas de fuego</button>
    <p id="timer">Tiempo restante: 30s</p>
    <p id="result"></p>
  `;

  let timeLeft = 30;
  const timerElement = document.getElementById("timer");

  // Actualizar el temporizador cada segundo
  const timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = `Tiempo restante: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showResult("No se recibió respuesta a tiempo.");
      socket.emit("answer", "TIMEOUT"); // Enviar notificación de tiempo agotado
    }
  }, 1000);

  // Escuchar la respuesta enviada por client-app1
  socket.on("answer", (answer) => {
    clearInterval(timerInterval); // Parar el temporizador cuando se reciba la respuesta
    checkAnswer(answer);
  });

  // Función para verificar la respuesta
  function checkAnswer(answer) {
    const correctAnswer = "B"; // La respuesta correcta es la opción B (Absorber habilidades)

    if (answer === correctAnswer) {
      showResult(
        "¡Correcto! Kirby tiene la habilidad única de absorber sus enemigos y copiar sus poderes, lo que permite adaptarse a diferentes situaciones del juego."
      );
    } else {
      showResult(
        "Incorrecto. Kirby tiene la habilidad única de absorber sus enemigos y copiar sus poderes, lo que permite adaptarse a diferentes situaciones del juego."
      );
    }
  }

  // Mostrar el resultado en la pantalla grande
  function showResult(resultText) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = resultText;

    // Desactivar los botones
    document.getElementById("optionA").disabled = true;
    document.getElementById("optionB").disabled = true;
    document.getElementById("optionC").disabled = true;
    document.getElementById("optionD").disabled = true;
  }
}
