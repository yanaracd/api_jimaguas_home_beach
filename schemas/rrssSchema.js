/* ____________________________________________________ *\
* Schema de Rrss
*
* Este modelo define la estructura y comportamiento de los registros 
* de las redes sociales en la BD
*
* @model Rrss
* @property {String} href - URL del enlace
* @property {String} title - Título del enlace
* @property {String} d - Icono de la red social
* @property {Object} img - Objeto que contiene los atributos de una imagen
* _____________________________________________________ */

const mongoose = require("mongoose")

const rrssSchema = new mongoose.Schema(
    { href: String, title: String, d: String, img: Object },
    { collection: 'rrss' }
)

module.exports = {
    rrssSchema
}