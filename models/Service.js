/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} Service
* _____________________________________________________ */

const mongoose = require("mongoose")
const { serviceSchema } = require("../schemas/serviceSchema")

const Service = mongoose.model('Service', serviceSchema)

module.exports = {
    Service
}