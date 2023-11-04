/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Anfitrion
* _____________________________________________________ */

const mongoose = require("mongoose")
const { anfitrionSchema } = require("../schemas/anfitrionSchema")

const Anfitrion = mongoose.model('Anfitrion', anfitrionSchema)

module.exports = {
    Anfitrion
}