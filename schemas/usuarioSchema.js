/* ____________________________________________________ *\
* Schema de Usuario
*
* Este modelo define la estructura y comportamiento de los registros 
* de los usuarios en la BD
*
* @model Usuario
* @property {String} user - Define el nombre del usuario
* @property {String} pass - Define la contraseña del usuario
* _____________________________________________________ */

const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema(
    { user: String, pass: String },
    { collection: 'usuarios' }
)

module.exports = {
    usuarioSchema
}