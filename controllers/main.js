const { Imagen } = require("../models/Imagen")

const getImagenes = async ( req , res )=>{

    const buscar = await Imagen.find()
    res.json( buscar )
}

module.exports = {
    getImagenes
}