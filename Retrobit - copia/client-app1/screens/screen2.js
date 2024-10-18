import { router, socket } from "../routes.js";

export default function renderScreen2() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 2</h1>
        <button id="signIn" onclick="signIn()">Sign in</button>
        <button id="start" onclick="start()">Start</button>
        
    `;

  async function requestListOfUsers() {
    try {
      const url = "http://localhost:5050/users";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  document
    // .getElementById("requestButton")
    // .addEventListener("click", async () => {
    //   const listUsers = await requestListOfUsers();
    //   console.log(listUsers);
    // });

  document.getElementById("signIn").addEventListener("click", () => {
    router.navigateTo("/");
    socket.emit("event2");
  });

  document.getElementById("start").addEventListener("click", () => {
    router.navigateTo("/screen3");
  });
}
