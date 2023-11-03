const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema(
    { user: String, pass: String },
    { collection: 'usuarios' }
)

module.exports = {
    usuarioSchema
}