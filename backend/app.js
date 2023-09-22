const express = require("express");

const { main } = require("./config/database");

// Rutas de la API
const generoRoutes = require("./src/generos/routes/generoRoutes");

// Inicializar la app de express
const app = express();

// Conectar a la base de datos
main().catch((err) => console.log(err));

// Configurar middleware para parsear JSON
app.use(express.json());

// Configurar rutas de la API
app.use("/generos", generoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);
