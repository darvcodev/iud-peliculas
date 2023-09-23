const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema(
  {
    serial: {
      type: String,
      required: true,
      unique: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    sinopsis: String,
    urlPelicula: {
      type: String,
      required: true,
      unique: true,
    },
    imagenPortada: String,
    fechaCreacion: {
      type: Date,
      default: Date.now,
    },
    fechaActualizacion: {
      type: Date,
      default: Date.now,
    },
    anoEstreno: Number,
    generoPrincipal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pelicula",
      required: true,
    },
    directorPrincipal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Director",
      required: true,
    },
    productora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Productora",
      required: true,
    },
    tipo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tipo",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("peliculas", PeliculaSchema);
