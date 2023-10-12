const mongoose         = require("mongoose")
const { imagenSchema } = require("../schemas/imagenSchema")

const Imagen = mongoose.model( 'Imagen' , imagenSchema )

module.exports = {
    Imagen
}