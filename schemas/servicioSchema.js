/* ____________________________________________________ *\
* Schema de Servicio
*
* Este modelo define la estructura y comportamiento de los registros 
* de los servicios en la BD
*
* @model Servicio
* @property {String} className - Define el nombre de la clase
* @property {Object} img - Objeto que contiene los atributos de una imagen
* @property {String} button - Define el nombre del botón
* @property {String} h3 - Define el nombre del servicio
* _____________________________________________________ */

const mongoose = require("mongoose")

const servicioSchema = new mongoose.Schema(
    { className: String, img: Object, button: String, h3: String },
    { collection: 'servicios' }
)

module.exports = {
    servicioSchema
}