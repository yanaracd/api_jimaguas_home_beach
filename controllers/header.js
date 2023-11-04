/* ____________________________________________________ *\
* @controller {header.js} Ruta del Header
*
* Esta ruta maneja las solicitudes relacionadas con el header de la app
* 
* @route {GET} /enlaces
* _____________________________________________________ */

const { Enlace } = require("../models/Enlace")

const getEnlaces = async (req, res, next) => {
    try {
        const buscar = await Enlace.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getEnlaces
}