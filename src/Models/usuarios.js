const mongoose = require("mongoose");
const { Schema } = mongoose;

const usuarioEsquema = new Schema(
  {
    usuario: { type: String, required: true },
    identificacion: { type: Number, required: true },
    email: { type: String, required: true },
    description: {
      type: String,
      required: false,
      default: "El usuario no añadió una descropción",
    },
    image: { type: String, required: false, default: "Sin Imagénes" },
    tags: { type: Array, required: false, default: false },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("Product", usuarioEsquema);
