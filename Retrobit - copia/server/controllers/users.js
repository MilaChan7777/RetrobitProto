const db = require("../db");
const { getIO } = require("../socket");

const getUsers = async (req, res) => {
  try {
    res.status(200).json(db.users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUsers = async (req, res) => {
  try {
    const { username } = req.body; // Esperamos un objeto que contenga 'username'
    const user = { id: Date.now(), username }; // Puedes usar un ID basado en la fecha actual
    db.users.push(user);
    
    // Emitir evento para que los demás clientes sepan que un nuevo usuario ha sido creado
    getIO().emit("userCreated", user); 
    
    res.status(200).json(db.users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers, createUsers };
