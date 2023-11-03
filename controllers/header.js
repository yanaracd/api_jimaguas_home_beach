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