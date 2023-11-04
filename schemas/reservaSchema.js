/* ____________________________________________________ *\
* Schema de Reserva
*
* Este modelo define la estructura y comportamiento de los registros 
* de las reservas en la BD
*
* @model Reserva
* @property {String} entrada - Indica el día de la entrada de la reserva
* @property {String} salida - Indica el día de la salida de la reserva
* @property {String} cantidad - Indica la cantidad de huéspedes de la reserva
* @property {String} hab - Indica la habitación de la reserva
* _____________________________________________________ */

const mongoose = require("mongoose")

const reservaSchema = new mongoose.Schema(
    { entrada: String, salida: String, cantidad: String, hab: String },
    { collection: 'reservas' }
)

module.exports = {
    reservaSchema
}