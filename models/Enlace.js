/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Enlace
* _____________________________________________________ */

const mongoose = require("mongoose")
const { enlaceSchema } = require("../schemas/enlaceSchema")

const Enlace = mongoose.model('Enlace', enlaceSchema)

module.exports = {
    Enlace
}