/* ____________________________________________________ *\
* Schema de Enlace
*
* Este modelo define la estructura y comportamiento de los registros 
* de los enlaces en la BD
*
* @model Enlace
* @property {String} href - URL del enlace
* @property {String} title - Título del enlace
* @property {String} nombre - Nombre del enlace
* _____________________________________________________ */

const mongoose = require("mongoose")

const enlaceSchema = new mongoose.Schema(
    { href: String, title: String, nombre: String },
    { collection: 'enlaces' }
)

module.exports = {
    enlaceSchema
}