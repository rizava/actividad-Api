const { application } = require("express");
const express = require("express");
const router = express.Router();

// -- importemos el controlador que nos trae las funciones
const productsControllers = require("../controllers/usuarioController");

router.get("/getUsuario", productsControllers.getUsuario);
router.post("/crearUsuario", productsControllers.crearUsuario);
router.put("/updateUsuario/:pato", productsControllers.updateUsuario);

module.exports = router;
