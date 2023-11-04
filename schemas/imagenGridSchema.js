/* ____________________________________________________ *\
* Schema de ImagenGrid
*
* Este modelo define la estructura y comportamiento de los registros 
* de las imágenes del grid en la BD
*
* @model ImagenGrid
* @property {String} src - Ruta de la imagen
* @property {String} alt - Texto alternativo de la imagen
* _____________________________________________________ */

const mongoose = require("mongoose")

const imagenGridSchema = new mongoose.Schema(
    { src: String, alt: String },   
    { collection: 'imagenesGrid' }
)

module.exports = {
    imagenGridSchema
}