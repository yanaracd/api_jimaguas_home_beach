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

const postReservas = async ( req , res )=>{

    const { entrada , salida , cantidad , hab } = req.body
    
    const nuevo = new Reserva({ entrada , salida , cantidad , hab })
    await nuevo.save()

    let mensaje = `Reserva creada correctamente`
    res.json( mensaje )
}

module.exports = {
    getImagenes,
    getReservas,
    postReservas
}