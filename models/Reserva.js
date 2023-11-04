/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Reserva
* _____________________________________________________ */

const mongoose = require("mongoose")
const { reservaSchema } = require("../schemas/reservaSchema")

const Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = {
    Reserva
}