// renderRegisterScreen.js

import { socket } from "./socket.js";

export default function renderRegisterScreen() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Registro</h1>
    <form id="registerForm">
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" required>
      <label for="email">Correo:</label>
      <input type="email" id="email" required>
      <button type="submit">Empezar</button>
    </form>
  `;

  const registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Enviar datos al servidor para registrar al usuario
    socket.emit("register", { username, email });

    // Navegar a la trivia (screen1 en client-app2)
    socket.on("startTrivia", () => {
      // Redireccionar a la trivia
      window.location.href = "http://localhost:5050/app2"; // Ajustar la URL según tu configuración
    });
  });
}




















// import { router, socket } from "../routes.js";

// export default function renderScreen1() {
//   const app = document.getElementById("app");
//   app.innerHTML = `
//         <h1>Screen 1</h1>       
//         <input type="text" id="nickname" name="nickname" placeholder="Nickname" required>
//         <input type="email" id="email" name="email" placeholder="Email" required>
//         <button id="Go" type="submit">Go</button>
//     `;

//   document.getElementById("Go").addEventListener("click", () => {
//     const nickname = document.getElementById("nickname").value;
//     const email = document.getElementById("email").value;

//     if (nickname && email) {
//       // Enviar los datos del usuario al servidor
//       console.log("Datos enviados:", { nickname, email });
//       socket.emit("registerUser", { nickname, email });

//       // Redirigir a la pantalla de QR
//       router.navigateTo("/screen2");
//     } else {
//       alert("Por favor, rellena ambos campos.");
//     }
//   });
// }
