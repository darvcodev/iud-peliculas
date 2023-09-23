const mongoose = require("mongoose");

const GeneroSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      enum: ["activo", "inactivo"],
      default: "activo",
      required: true,
    },
    fecha_creacion: {
      type: Date,
      default: Date.now,
    },
    fecha_actualizacion: {
      type: Date,
      default: Date.now,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("generos", GeneroSchema);
