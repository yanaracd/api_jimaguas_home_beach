const mongoose = require("mongoose")

const imagenSchema = new mongoose.Schema(
    { src : String , alt : String , active : String },
    { collection : 'imagenes' }
)

module.exports = {
    imagenSchema
}