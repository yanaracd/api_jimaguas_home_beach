/* ____________________________________________________ *\
* @controller {booking.js} Ruta de Reservas
*
* Esta ruta maneja las solicitudes relacionadas con las reservas
* 
* @route {GET}    /reservas
* @route {POST}   /reservas
* @route {PUT}    /reservas
* @route {DELETE} /reservas/:id
* _____________________________________________________ */

const { Reserva } = require("../models/Reserva")

const getReservas = async (req, res, next) => {
    try {
        const buscar = await Reserva.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const postReservas = async (req, res, next) => {
    try {
        const { entrada, salida, cantidad, hab } = req.body

        const nuevo = new Reserva({ entrada, salida, cantidad, hab })
        await nuevo.save()

        let mensaje = `Reserva creada correctamente`
        res.json(mensaje)

    } catch (error) {
        next(error)
    }
}

const putReserva = async (req, res, next) => {
    try {
        const { _id, ...datos } = req.body

        await Reserva.findByIdAndUpdate(_id, { ...datos })

        const buscar = await Reserva.find()
        res.json(buscar)
    } catch (error) {
        next(error)
    }
}

const deleteReserva = async (req, res, next) => {
    try {
        const { id } = req.params

        await Reserva.findByIdAndDelete(id)

        const buscar = await Reserva.find()
        res.json(buscar)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getReservas,
    postReservas,
    putReserva,
    deleteReserva
}