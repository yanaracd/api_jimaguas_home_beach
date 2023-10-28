const { Reserva } = require("../models/Reserva")

const getReservas = async (req, res) => {

    const buscar = await Reserva.find()
    res.json(buscar)
}

const postReservas = async (req, res) => {

    const { entrada, salida, cantidad, hab } = req.body

    const nuevo = new Reserva({ entrada, salida, cantidad, hab })
    await nuevo.save()

    let mensaje = `Reserva creada correctamente`
    res.json(mensaje)
}

const putReserva = async (req, res) => {

    const { _id, ...datos } = req.body

    await Reserva.findByIdAndUpdate(_id, { ...datos })

    const buscar = await Reserva.find()
    res.json(buscar)
}

const deleteReserva = async (req, res) => {

    const { id } = req.params

    await Reserva.findByIdAndDelete(id)

    const buscar = await Reserva.find()
    res.json(buscar)
}

module.exports = {
    getReservas,
    postReservas,
    putReserva,
    deleteReserva
}