const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); // Crea el servidor HTTP
app.use(express.json()); // Utilidad para procesar JSON en las solicitudes
app.use(cors()); // Permite que los clientes realicen solicitudes desde otros hosts o IPs

const clientApp1Path = path.resolve(__dirname, "../client-app1");
const clientApp2Path = path.resolve(__dirname, "../client-app2");
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// Servir la aplicación cliente 1
app.use("/app1", express.static(clientApp1Path));

// Servir la aplicación cliente 2
app.use("/app2", express.static(clientApp2Path));

// Captura todas las rutas de client-app1
app.get("/app1/*", (req, res) => {
  res.sendFile(path.join(clientApp1Path, "index.html"));
});

// Captura todas las rutas de client-app2
app.get("/app2/*", (req, res) => {
  res.sendFile(path.join(clientApp2Path, "index.html"));
});

// Rutas de usuario
const usersRouter = require("./routes/users");
app.use("/", usersRouter);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;