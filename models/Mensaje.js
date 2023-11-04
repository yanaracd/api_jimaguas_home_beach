/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Mensaje
* _____________________________________________________ */

const mongoose = require("mongoose")
const { mensajeSchema } = require("../schemas/mensajeSchema")

const Mensaje = mongoose.model('Mensaje', mensajeSchema)

module.exports = {
    Mensaje
}