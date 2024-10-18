import { router, socket } from "../routes.js";
import QRCode from 'qrcode';

export default function renderScreen0() {
  const app = document.getElementById("app");

  // Configuración del contenido de la pantalla
  app.innerHTML = `
    <h1>RETROBIT</h1>
    <canvas id="qrCanvas"></canvas>
    <p>¡Escanea el código para registrarte y participar!</p>
    <div id="qr-code"></div> <!-- Contenedor para el código QR -->
  `;

  // Selecciona el elemento donde se mostrará el QR
  const qrContainer = document.getElementById('qr-code');
  
  // URL a la que redirigirá el código QR
  const urlToRedirect = 'http://localhost:5050/app1/screen1';
  
  // Genera el código QR
  QRCode.toDataURL(urlToRedirect)
      .then(url => {
          // Crea una imagen y la añade al contenedor
          const img = document.createElement('img');
          img.src = url;
          qrContainer.appendChild(img);
      })
      .catch(err => {
          console.error(err);
      });

  // Escucha el evento de socket para navegar a screen1
  socket.on("showSomething", (data) => {
    router.navigateTo("/screen1"); // Navega a la siguiente pantalla
  });
}