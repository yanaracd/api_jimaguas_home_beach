const mongoose = require("mongoose")
const { mensajeSchema } = require("../schemas/mensajeSchema")

const Mensaje = mongoose.model('Mensaje', mensajeSchema)

module.exports = {
    Mensaje
}