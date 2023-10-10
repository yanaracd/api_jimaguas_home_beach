const mongoose          = require("mongoose")
const { enlaceSchema } = require("../schemas/enlaceSchema")

const Enlace = mongoose.model( 'Enlace' , enlaceSchema )

module.exports = {
    Enlace
}