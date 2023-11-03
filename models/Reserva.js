const mongoose = require("mongoose")
const { reservaSchema } = require("../schemas/reservaSchema")

const Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = {
    Reserva
}