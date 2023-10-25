const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema(
    { h3 : String , article : Array },
    { collection : 'services' }
)

module.exports = {
    serviceSchema
}