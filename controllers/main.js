const { Imagen } = require("../models/Imagen")
const { Room } = require("../models/Room")
const { ImagenGrid } = require("../models/ImagenGrid")
const { ImagenGridDisabled } = require("../models/ImagenGridDisabled")
const { Anfitrion } = require("../models/Anfitrion")
const { Servicio } = require("../models/Servicio")
const { Service } = require("../models/Service")

const getImagenes = async ( req , res )=>{

    const buscar = await Imagen.find()
    res.json( buscar )
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

const getServices = async ( req , res )=>{

    const buscar = await Service.find()
    res.json( buscar )
}

module.exports = {
    getImagenes,
    getRoomsLightbox,
    getImagenesGrid,
    getImagenesGridDisabled,
    getServicios,
    getAnfitriones,
    getServices
}