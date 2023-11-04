/* ____________________________________________________ *\
* Schema de Anfitrion
*
* Este modelo define la estructura y comportamiento de los registros 
* de anfitriones en la BD
*
* @model Anfitrion
* @property {Object} img - Objeto que contiene los atributos de una imagen
* @property {String} h3 - Nombre de los anfitriones
* @property {Array} li - Array que contiene todos los datos de contacto de los anfitriones
* _____________________________________________________ */

const mongoose = require("mongoose")

const anfitrionSchema = new mongoose.Schema(
    { img: Object, h3: String, li: Array },
    { collection: 'anfitriones' }
)

module.exports = {
    anfitrionSchema
}