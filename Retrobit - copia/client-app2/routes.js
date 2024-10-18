import renderScreen0 from "./screens/screen0.js";
import renderScreen1 from "./screens/screen1.js"; // Asegúrate de que está importado
import renderScreen2 from "./screens/screen2.js"; // Asegúrate de que está importado
import renderScreen3 from "./screens/screen3.js";
import renderScreen4 from "./screens/screen4.js";
import renderScreen5 from "./screens/screen5.js";
import renderScreen6 from "./screens/screen6.js";
import renderScreen7 from "./screens/screen7.js";
import renderScreen8 from "./screens/screen8.js";
import renderScreen9 from "./screens/screen9.js";
import { socket } from "./socket.js";

const router = new Router({
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
});

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

router.add("/", async () => {
  clearScripts();
  renderScreen0(); // Cambia esto si quieres que empiece en otra pantalla
});

router.add("/screen1", async () => {
  clearScripts();
  renderScreen1();
});

router.add("/screen2", async () => {
  clearScripts();
  renderScreen2();
});

router.add("/screen3", async () => {
  clearScripts();
  renderScreen3();
});

router.add("/screen4", async () => {
  clearScripts();
  renderScreen4();
});

router.add("/screen5", async () => {
  clearScripts();
  renderScreen5();
});

router.add("/screen6", async () => {
  clearScripts();
  renderScreen6();
});

router.add("/screen7", async () => {
  clearScripts();
  renderScreen7();
});

router.add("/screen8", async () => {
  clearScripts();
  renderScreen8();
});

router.add("/screen9", async () => {
  clearScripts();
  renderScreen9();
});

// Check for route changes
router.check().addUriListener();

// Handle browser navigation
window.addEventListener("popstate", () => {
  router.check();
});

// Initialize the router on page load
document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

export { router, socket };
