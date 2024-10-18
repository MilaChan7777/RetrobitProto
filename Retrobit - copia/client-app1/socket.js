import { io } from "socket.io-client";

// Establece la conexión con el servidor Socket.IO
const socket = io("http://localhost:5050", { path: "/real-time" }); // Actualiza esto con la URL de tu servidor

// Maneja el evento de conexión
socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

// Manejo de posibles errores de conexión
socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});

// Exporta el socket para su uso en otras partes de la aplicación
export default socket;
