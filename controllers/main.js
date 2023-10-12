const { Imagen } = require("../models/Imagen")
const { Reserva } = require("../models/Reserva")

const getImagenes = async ( req , res )=>{

    const buscar = await Imagen.find()
    res.json( buscar )
}

const getReservas = async ( req , res )=>{

    const buscar = await Reserva.find()
    res.json( buscar )
}

module.exports = {
    getImagenes,
    getReservas
}