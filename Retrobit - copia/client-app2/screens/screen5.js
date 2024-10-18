// PREGUNTA 3
// ¿Qué personaje es la mascota oficial de nintendo?
//Respuestas: 
// Triángulo, Sonic
// Rombo, Pikachu
// Círculo, Mario
// Cuadrado, Donkey Kong

import { socket } from "../routes.js";

export default function renderScreen5() { // Cambia el nombre a renderScreen5 o como desees
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>PREGUNTA 3</h1>
    <p>¿Qué personaje es la mascota oficial de Nintendo?</p>
    <button id="optionA">1. Sonic</button>
    <button id="optionB">2. Pikachu</button>
    <button id="optionC">3. Mario</button>
    <button id="optionD">4. Donkey Kong</button>
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
    const correctAnswer = "C"; // La respuesta correcta es la opción C (Mario)

    if (answer === correctAnswer) {
      showResult(
        "¡Correcto! Mario Bros se convirtió en la mascota de Nintendo gracias a su gran éxito en 'Donkey Kong', donde revolucionó los videojuegos con su jugabilidad innovadora."
      );
    } else {
      showResult(
        "Incorrecto. Mario Bros se convirtió en la mascota de Nintendo gracias a su gran éxito en 'Donkey Kong', donde revolucionó los videojuegos con su jugabilidad innovadora."
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
