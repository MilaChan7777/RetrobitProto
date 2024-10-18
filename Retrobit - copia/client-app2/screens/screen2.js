// screens/screen2.js
export default function renderScreen2() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <h1>NINTENDO TRIVIA</h1>
      <p>Clic en star para Comenzar</p>
    `;
  
    document.getElementById("back").addEventListener("click", () => {
      window.location.hash = "/"; // Navigate back to Screen 1
    });
  }
  
