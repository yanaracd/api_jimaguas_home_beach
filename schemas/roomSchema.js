/* ____________________________________________________ *\
* Schema de Room
*
* Este modelo define la estructura y comportamiento de los registros 
* de las habitaciones en la BD
*
* @model Room
* @property {String} h3 - Título del artículo
* @property {Array} article - Array de objetos que indica toda la inofrmación
*                             relacionada con las habitaciones
* _____________________________________________________ */

const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema(
    { h3: String, article: Array },
    { collection: 'rooms' }
)

module.exports = {
    roomSchema
}