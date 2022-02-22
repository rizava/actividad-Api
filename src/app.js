const express = require("express");/* la const es igual aun objeto de express */
const env = require("dotenv");/* permite usar las variables  de entorno */
const morgan = require("morgan");/* la const es igual a un objeto de express */
const app = express();
const {schema}= require("../src/Models/usuarios")


env.config();/* empieza a usar las variables de entoino se inicia un nuevo dotenv */



 /* se conocem como midleware */
app.use(morgan("dev"));/* utilizamos  morgan muestra peticiones y el estado de las mismas */
const port = process.env.PORT;/* Se traen las variablee de entorno qeue estan en .env  la palabra PORT va en mayuscula*/
app.use(express.json())/* para hacer peticiones a express de tipo post para enterder el formato post */
require('./database')/* se requiere la base de datos */

// Rutas
app.use('/myApi/products', require('./routes/UsuarioRutas'))

app.listen(port, () => console.log(`Ejecutando api en el puerto ${port}`));/*  es el encargado de escuchar el puerto vieja chismosa */