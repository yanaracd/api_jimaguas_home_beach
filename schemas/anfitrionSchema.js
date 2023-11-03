const mongoose = require("mongoose")

const anfitrionSchema = new mongoose.Schema(
    { img: Object, h3: String, li: Array },
    { collection: 'anfitriones' }
)

module.exports = {
    anfitrionSchema
}