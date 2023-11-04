/* ____________________________________________________ *\
* Schema de Mensaje
*
* Este modelo define la estructura y comportamiento de los registros 
* de los mensajes en la BD
*
* @model Mensaje
* @property {String} texto - Indica el mensaje que ha enviado el usuario a la BD
* _____________________________________________________ */

const mongoose = require("mongoose")

const mensajeSchema = new mongoose.Schema(
    { texto: String },
    { collection: 'mensajes' }
)

module.exports = {
    mensajeSchema
}