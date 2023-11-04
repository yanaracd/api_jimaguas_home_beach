/* ____________________________________________________ *\
* Modelo de la API
*
* @model {Object} ImagenGrid
* _____________________________________________________ */

const mongoose = require("mongoose")
const { imagenGridSchema } = require("../schemas/imagenGridSchema")

const ImagenGrid = mongoose.model('ImagenGrid', imagenGridSchema)

module.exports = {
    ImagenGrid
}