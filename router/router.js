const express = require('express')
const { getBasic, getUsuarios, postUsuarios, postLogin } = require('../controllers/login')

const router = express.Router()

router.route('/')
    .get(getBasic)
    .post(postLogin)

router.route('/usuarios')
    // .get(getUsuarios)
    .post(postUsuarios)

module.exports = {
    router
}