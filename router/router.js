const express = require('express')
const { getBasic, getUsuarios, postUsuarios, postLogin } = require('../controllers/login')
const { getEnlaces } = require('../controllers/header')
const { getImagenes, getRoomsLightbox, getImagenesGrid, getImagenesGridDisabled, getAnfitriones, getServicios, getServices } = require('../controllers/main')
const { getRrss, getMensajes, postMensajes } = require('../controllers/footer')
const { getReservas, postReservas, deleteReserva, putReserva } = require('../controllers/booking')

const router = express.Router()

router.route('/')
    .get(getBasic)
    .post(postLogin)

router.route('/usuarios')
    // .get(getUsuarios)
    .post(postUsuarios)

router.route('/enlaces')
    .get(getEnlaces)

router.route('/imagenes')
    .get(getImagenes)

router.route('/reservas')
    .get(getReservas)
    .post(postReservas)
    .put(putReserva)

router.route('/reservas/:id')
    .delete(deleteReserva)

router.route('/rooms')
    .get(getRoomsLightbox)

router.route('/imagenesGrid')
    .get(getImagenesGrid)

router.route('/imagenesGridDisabled')
    .get(getImagenesGridDisabled)

router.route('/servicios')
    .get(getServicios)

router.route('/anfitriones')
    .get(getAnfitriones)

router.route('/rrss')
    .get(getRrss)

router.route('/services')
    .get(getServices)

router.route('/message')
    .get(getMensajes)
    .post(postMensajes)

module.exports = {
    router
}