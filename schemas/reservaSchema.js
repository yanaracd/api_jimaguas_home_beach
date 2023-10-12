const mongoose = require("mongoose")

const reservaSchema = new mongoose.Schema(
    { entrada : String , salida : String , cantidad : String , hab : String },
    { collection : 'reservas' }
)

module.exports = {
    reservaSchema
}