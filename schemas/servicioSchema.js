const mongoose = require("mongoose")

const servicioSchema = new mongoose.Schema(
    { className : String , img : Object , button : String , h3 : String },
    { collection : 'servicios' }
)

module.exports = {
    servicioSchema
}