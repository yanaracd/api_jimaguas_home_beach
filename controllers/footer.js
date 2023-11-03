const { Rrss } = require("../models/Rrss")

const getRrss = async (req, res, next) => {
    try {
        const buscar = await Rrss.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRrss
}