const mongoose = require("mongoose")

const imagenSchema = new mongoose.Schema(
    { src: String, alt: String, active: String, statico: String, loading: String },
    { collection: 'imagenes' }
)

module.exports = {
    imagenSchema
}