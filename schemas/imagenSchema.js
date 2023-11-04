/* ____________________________________________________ *\
* Schema de Imagen
*
* Este modelo define la estructura y comportamiento de los registros 
* de las imágenes en la BD
*
* @model Imagen
* @property {String} src - Ruta de la imagen
* @property {String} alt - Texto alternativo de la imagen
* @property {String} active - Indica si la imagen esta activa o no
* @property {String} statico - Indica si la imagen esta estática o no
* @property {String} loading - Indica como cargará la imagen
* _____________________________________________________ */

const mongoose = require("mongoose")

const imagenSchema = new mongoose.Schema(
    { src: String, alt: String, active: String, statico: String, loading: String },
    { collection: 'imagenes' }
)

module.exports = {
    imagenSchema
}