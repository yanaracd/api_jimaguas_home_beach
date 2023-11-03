const mongoose = require("mongoose")

const imagenGridDisabledSchema = new mongoose.Schema(
    { src: String, alt: String },
    { collection: 'imagenesGridDisabled' }
)

module.exports = {
    imagenGridDisabledSchema
}