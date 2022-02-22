// traer el modelo de datos
const Product = require('../Models/usuarios')

// Mostrar los usuarios creados en la BD
const getUsuario = (req, res) => {
    res.json({name: "ricardo"})
}

// Crear un usuario en la base de datos
const crearUsuario = (req, res) => {

}
/* actulizar unn usuario en la base de datos */
const updateUsuario = (req, res) => {
    res.json({status: "usuario Actualizado exitosamente"})
}
/* crear un email en la base de datos */
const crearEmail = (req, res) => {
    res.json({status: "email creado exitosamente"})
}



module.exports = {
    getUsuario,
    crearUsuario,
    updateUsuario,
    crearEmail
}