const mongoose          = require("mongoose")
const { usuarioSchema } = require("../schemas/usuarioSchema")

const Usuario = mongoose.model( 'Usuario' , usuarioSchema )

module.exports = {
    Usuario
}