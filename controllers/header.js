const { Enlace } = require("../models/Enlace")

const getEnlaces = async ( req , res )=>{

    const buscar = await Enlace.find()
    res.json( buscar )
}

module.exports = {
    getEnlaces
}