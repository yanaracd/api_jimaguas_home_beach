const { Imagen } = require("../models/Imagen")
const { Room } = require("../models/Room")
const { ImagenGrid } = require("../models/ImagenGrid")
const { ImagenGridDisabled } = require("../models/ImagenGridDisabled")
const { Anfitrion } = require("../models/Anfitrion")
const { Servicio } = require("../models/Servicio")
const { Service } = require("../models/Service")

const getImagenes = async (req, res, next) => {
    try {
        const buscar = await Imagen.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getRoomsLightbox = async (req, res, next) => { 
    try {
        const buscar = await Room.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getImagenesGrid = async (req, res, next) => {
    try {
        const buscar = await ImagenGrid.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getImagenesGridDisabled = async (req, res, next) => {
    try {
        const buscar = await ImagenGridDisabled.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getServicios = async (req, res, next) => {
    try {
        const buscar = await Servicio.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getAnfitriones = async (req, res, next) => {
    try {
        const buscar = await Anfitrion.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const getServices = async (req, res, next) => {
    try {
        const buscar = await Service.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
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