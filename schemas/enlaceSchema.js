const mongoose = require("mongoose")

const enlaceSchema = new mongoose.Schema(
    { href : String , title : String , nombre : String },
    { collection : 'enlaces' }
)

module.exports = {
    enlaceSchema
}