const { Imagen } = require("../models/Imagen")
const { Reserva } = require("../models/Reserva")
const { Room } = require("../models/Room")
const { ImagenGrid } = require("../models/ImagenGrid")
const { ImagenGridDisabled } = require("../models/ImagenGridDisabled")
const { Anfitrion } = require("../models/Anfitrion")
const { Servicio } = require("../models/Servicio")

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

const getRoomsLightbox = async( req , res )=>{

    const buscar = await Room.find()
    res.json( buscar )
}

const getImagenesGrid = async ( req , res )=>{

    const buscar = await ImagenGrid.find()
    res.json( buscar )
}

const getImagenesGridDisabled = async ( req , res )=>{

    const buscar = await ImagenGridDisabled.find()
    res.json( buscar )
}

const getServicios = async ( req , res )=>{

    const buscar = await Servicio.find()
    res.json( buscar )
}

const getAnfitriones = async ( req , res )=>{

    const buscar = await Anfitrion.find()
    res.json( buscar )
}

module.exports = {
    getImagenes,
    getReservas,
    postReservas,
    getRoomsLightbox,
    getImagenesGrid,
    getImagenesGridDisabled,
    getServicios,
    getAnfitriones
}