const mongoose = require("mongoose")
const { anfitrionSchema } = require("../schemas/anfitrionSchema")

const Anfitrion = mongoose.model('Anfitrion', anfitrionSchema)

module.exports = {
    Anfitrion
}