import renderScreen1 from "./screens/screen1.js";
import renderScreen2 from "./screens/screen2.js";
import renderScreen3 from "./screens/screen3.js";
import renderScreen4 from "./screens/screen4.js";
import renderScreen5 from "./screens/screen5.js";
import renderScreen6 from "./screens/screen6.js";
import renderScreen7 from "./screens/screen7.js";
import renderScreen8 from "./screens/screen8.js";
import renderScreen9 from "./screens/screen9.js";
import socket from "./socket.js";

const router = new Router({
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
});

// Limpiar el contenido de la pantalla anterior
function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

// Configuración de las rutas
router.add("/", () => {
  clearScripts();
  renderScreen1();
});

router.add("/screen2", () => {
  clearScripts();
  renderScreen2();
});

router.add("/screen3", () => {
  clearScripts();
  renderScreen3();
});

router.add("/screen4", () => {
  clearScripts();
  renderScreen4();
});

router.add("/screen5", () => {
  clearScripts();
  renderScreen5();
});

router.add("/screen6", () => {
  clearScripts();
  renderScreen6();
  socket.emit("correctAnswer", { message: "Correct screen displayed" });
});

router.add("/screen7", () => {
  clearScripts();
  renderScreen7();
});

router.add("/screen8", () => {
  clearScripts();
  renderScreen8();
});

router.add("/screen9", () => {
  clearScripts();
  renderScreen9();
});

// Verificar rutas y agregar listener para URI
router.check().addUriListener();

// Escuchar eventos de navegación del navegador
window.addEventListener("popstate", () => {
  router.check();
});

// Iniciar el enrutador cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

export { router, socket };