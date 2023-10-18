const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema(
    { h3 : String , article : Array },
    { collection : 'rooms' }
)

module.exports = {
    roomSchema
}