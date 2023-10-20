const express = require('express')
const { getBasic, getUsuarios, postUsuarios, postLogin } = require('../controllers/login')
const { getEnlaces } = require('../controllers/header')
const { getImagenes, getReservas, postReservas, getRoomsLightbox, getImagenesGrid } = require('../controllers/main')

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

module.exports = {
    router
}