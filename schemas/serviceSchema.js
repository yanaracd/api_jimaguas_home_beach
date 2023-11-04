/* ____________________________________________________ *\
* Schema de Service
*
* Este modelo define la estructura y comportamiento de los registros 
* de la descripción los servicios en la BD
*
* @model Service
* @property {String} h3 - Título del artículo
* @property {Array} article - Array de objetos que indica toda la inofrmación
*                             relacionada con los servicios
* _____________________________________________________ */

const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema(
    { h3: String, article: Array },
    { collection: 'services' }
)

module.exports = {
    serviceSchema
}