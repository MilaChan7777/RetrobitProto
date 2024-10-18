// PREGUNTA 2
// ¿Cuál es el personaje principal de "The legends of Zelda"?
//Respuestas: 
// Triángulo, Zelda
// Rombo, Link
// Círculo, Ganon
// Cuadrado, Tingle

import { socket } from "../routes.js";

export default function renderScreen4() { // Cambia el nombre a renderScreen4 o como desees
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>PREGUNTA 2</h1>
    <p>¿Cuál es el personaje principal de "The Legend of Zelda"?</p>
    <button id="optionA">1. Zelda</button>
    <button id="optionB">2. Link</button>
    <button id="optionC">3. Ganon</button>
    <button id="optionD">4. Tingle</button>
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
    const correctAnswer = "B"; // La respuesta correcta es la opción B (Link)

    if (answer === correctAnswer) {
      showResult(
        "¡Correcto! La respuesta correcta es Link. Es un joven héroe que a menudo se embarca para rescatar a la princesa Zelda y derrotar al villano Ganon."
      );
    } else {
      showResult(
        "Incorrecto. La respuesta correcta es Link. Es un joven héroe que a menudo se embarca para rescatar a la princesa Zelda y derrotar al villano Ganon."
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
