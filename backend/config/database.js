const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect("mongodb+srv://darvcode:d4iIG4V2urXooVVT@iudigital.ft9pieu.mongodb.net/iud-peliculas");
    console.log("Conexión a la DB exitosa");
  } catch (error) {
    console.log("Error de conexión a la DB", error.message);
  }
}

module.exports = { main };
