const mongoose = require("mongoose")
const { imagenGridDisabledSchema } = require("../schemas/imagenGridDisabledSchema")

const ImagenGridDisabled = mongoose.model('ImagenGridDisabled', imagenGridDisabledSchema)

module.exports = {
    ImagenGridDisabled
}