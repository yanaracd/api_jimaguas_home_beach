const express = require('express')
const { getBasic, getUsuarios, postUsuarios, postLogin } = require('../controllers/login')
const { getEnlaces } = require('../controllers/header')
const { getImagenes, getReservas, postReservas, getRoomsLightbox, getImagenesGrid, getImagenesGridDisabled, getAnfitriones } = require('../controllers/main')
const { getRrss } = require('../controllers/footer')

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

router.route('/rooms')
    .get(getRoomsLightbox)

router.route('/imagenesGrid')
    .get(getImagenesGrid)

router.route('/imagenesGridDisabled')
    .get(getImagenesGridDisabled)

router.route('/anfitriones')
    .get(getAnfitriones)

router.route('/rrss')
    .get(getRrss)

module.exports = {
    router
}