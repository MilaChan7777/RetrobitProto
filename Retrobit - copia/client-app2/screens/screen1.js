import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>¡Bienvenido!</h1>
        <p>Prepárate para poner a prueba tus conocimientos sobre el mundo de Nintendo. Responde correctamente y acumula puntos para ganar fantásticos premios. ¡Demuestra que eres un verdadero fanático de Nintendo!</p> 

        <p>¿Estás listo para comenzar?</p>  
    `;

  socket.on("returnScreen1", (data) => {
    router.navigateTo("/");
  });
}
