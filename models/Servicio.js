/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Servicio
* _____________________________________________________ */

const mongoose = require("mongoose")
const { servicioSchema } = require("../schemas/servicioSchema")

const Servicio = mongoose.model('Servicio', servicioSchema)

module.exports = {
    Servicio
}