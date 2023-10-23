const mongoose = require("mongoose")

const anfitrionSchema = new mongoose.Schema(
    { img : Object , h3 : String },
    { collection : 'anfitriones' }
)

module.exports = {
    anfitrionSchema
}