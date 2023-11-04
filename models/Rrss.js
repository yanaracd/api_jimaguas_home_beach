/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Rrss
* _____________________________________________________ */

const mongoose = require("mongoose")
const { rrssSchema } = require("../schemas/rrssSchema")

const Rrss = mongoose.model('Rrss', rrssSchema)

module.exports = {
    Rrss
}