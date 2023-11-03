const mongoose = require("mongoose")

const imagenGridSchema = new mongoose.Schema(
    { src: String, alt: String },   
    { collection: 'imagenesGrid' }
)

module.exports = {
    imagenGridSchema
}