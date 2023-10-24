const { Rrss } = require("../models/Rrss")

const getRrss = async ( req , res )=>{

    const buscar = await Rrss.find()
    res.json( buscar )
}

module.exports = {
    getRrss
}