// PREGUNTA 1
// ¿Cuál fue la primera consola creada por nintendo?
//Respuestas: 
// Triángulo, Game boy
// Rombo, Nintendo 64
// Círculo NES
// Cuadrado, Color TV Game

import { socket } from "../routes";

export default function renderScreen3() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>PREGUNTA 1</h1>
    <p>¿Cuál fue la primera consola creada por Nintendo?</p>
    <button id="optionA">1. Game Boy </button>
    <button id="optionB">2. Nintendo 64 </button>
    <button id="optionC">3. NES </button>
    <button id="optionD">4. Color TV Game</button>
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
    }
  }, 1000);

  // Escuchar la respuesta enviada por client-app1
  socket.on("answer", (answer) => {
    clearInterval(timerInterval); // Parar el temporizador cuando se reciba la respuesta
    checkAnswer(answer);
  });

  // Función para verificar la respuesta
  function checkAnswer(answer) {
    const correctAnswer = "D"; // La respuesta correcta es la opción D (Color TV Game)

    if (answer === correctAnswer) {
      showResult(
        "¡Correcto! La primera consola de NINTENDO fue la COLOR TV GAME, lanzada en 1977."
      );
    } else {
      showResult(
        "Incorrecto. La primera consola de NINTENDO fue la COLOR TV GAME, lanzada en 1977."
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
