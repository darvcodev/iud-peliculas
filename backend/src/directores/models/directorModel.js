const mongoose = require("mongoose");

const DirectorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      enum: ["Activo", "Inactivo"],
      default: "Activo",
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
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("directores", DirectorSchema);
