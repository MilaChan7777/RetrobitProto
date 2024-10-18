// PREGUNTA 4
// ¿Cuál es el nombre del reino donde vive la princesa Peach?
//Respuestas: 
// Triángulo, Reino Hyrule
// Rombo, Reino champiñón
// Círculo, Reino Delfino
// Cuadrado, Reino de los Koopa

import { socket } from "../routes.js";

export default function renderScreen7() { // Cambia el nombre a renderScreen7 o como desees
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>PREGUNTA 4</h1>
    <p>¿Cuál es el nombre del reino donde vive la princesa Peach?</p>
    <button id="optionA">1. Reino Hyrule</button>
    <button id="optionB">2. Reino Champiñón</button>
    <button id="optionC">3. Reino Delfino</button>
    <button id="optionD">4. Reino de los Koopa</button>
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
    const correctAnswer = "B"; // La respuesta correcta es la opción B (Reino Champiñón)

    if (answer === correctAnswer) {
      showResult(
        "¡Correcto! El Reino Champiñón es el mundo ficticio donde se desarrollan la mayoría de los juegos donde Peach es la gobernante. Es un lugar colorido con diferentes paisajes, como praderas, montañas, castillos y océanos."
      );
    } else {
      showResult(
        "Incorrecto. El Reino Champiñón es el mundo ficticio donde se desarrollan la mayoría de los juegos donde Peach es la gobernante. Es un lugar colorido con diferentes paisajes, como praderas, montañas, castillos y océanos."
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
