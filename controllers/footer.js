const { Mensaje } = require("../models/Mensaje")
const { Rrss } = require("../models/Rrss")

const getRrss = async (req, res, next) => {
    try {
        const buscar = await Rrss.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getMensajes = async (req, res, next) => {
    try {
        const buscar = await Mensaje.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const postMensajes = async (req, res, next) => {
    try {
        const { texto } = req.body

        const nuevo = new Mensaje({ texto })
        await nuevo.save()

        let mensaje = `Mesnaje enviado correctamente`
        res.json(mensaje)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRrss,
    getMensajes,
    postMensajes
}