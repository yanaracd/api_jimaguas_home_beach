const mongoose = require("mongoose")

const mensajeSchema = new mongoose.Schema(
    { texto : String },
    { collection : 'mensajes' }
)

module.exports = {
    mensajeSchema
}