const express = require("express");
const { main } = require("./config/database");
const cors = require("cors"); // Importa la biblioteca cors

// Rutas de la API
const generoRoutes = require("./src/generos/routes/generoRoutes");
const tipoRoutes = require("./src/tipos/routes/tipoRoutes");
const productoraRoutes = require("./src/productoras/routes/productoraRoutes");
const directorRoutes = require("./src/directores/routes/directorRoutes");
const peliculaRoutes = require("./src/peliculas/routes/peliculaRoutes");

// Inicializar la app de express
const app = express();

// Conectar a la base de datos
main().catch((err) => console.log(err));

// Configurar middleware para parsear JSON
app.use(express.json());

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Configurar rutas de la API
app.use("/generos", generoRoutes);
app.use("/tipos", tipoRoutes);
app.use("/productoras", productoraRoutes);
app.use("/directores", directorRoutes);
app.use("/peliculas", peliculaRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);
