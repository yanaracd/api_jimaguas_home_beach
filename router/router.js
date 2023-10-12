const express = require('express')
const { getBasic, getUsuarios, postUsuarios, postLogin } = require('../controllers/login')
const { getEnlaces } = require('../controllers/header')
const { getImagenes } = require('../controllers/main')

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

module.exports = {
    router
}