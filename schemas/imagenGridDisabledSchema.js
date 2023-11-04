/* ____________________________________________________ *\
* Schema de ImagenGridDisabled
*
* Este modelo define la estructura y comportamiento de los registros 
* de las imágenes del grid en la BD
*
* @model ImagenGridDisabled
* @property {String} src - Ruta de la imagen
* @property {String} alt - Texto alternativo de la imagen
* _____________________________________________________ */

const mongoose = require("mongoose")

const imagenGridDisabledSchema = new mongoose.Schema(
    { src: String, alt: String },
    { collection: 'imagenesGridDisabled' }
)

module.exports = {
    imagenGridDisabledSchema
}