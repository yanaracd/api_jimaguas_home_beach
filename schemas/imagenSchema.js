const mongoose = require("mongoose")

const imagenSchema = new mongoose.Schema(
    { src : String , alt : String },
    { collection : 'imagenes' }
)

module.exports = {
    imagenSchema
}