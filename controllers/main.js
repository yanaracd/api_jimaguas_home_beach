const { Imagen } = require("../models/Imagen")
const { Reserva } = require("../models/Reserva")
const { Room } = require("../models/Room")

const getImagenes = async ( req , res )=>{

    const buscar = await Imagen.find()
    res.json( buscar )
}

const getReservas = async ( req , res )=>{

    const buscar = await Reserva.find()
    res.json( buscar )
}

const postReservas = async ( req , res )=>{

    const { entrada , salida , cantidad , hab } = req.body
    
    const nuevo = new Reserva({ entrada , salida , cantidad , hab })
    await nuevo.save()

    let mensaje = `Reserva creada correctamente`
    res.json( mensaje )
}

const getRoomsLightbox = async( req , res)=>{

    const buscar = await Room.find()
    res.json( buscar )
}

module.exports = {
    getImagenes,
    getReservas,
    postReservas,
    getRoomsLightbox
}