/* ____________________________________________________ *\
* Ruta Principal de la API (router.js)
* Esta ruta maneja las solicitudes a la raíz de la API
*
* @controller (se encuentran en la carperta controllers)
*
* @endpoint {/}                     [get, post]
* @endpoint {/usuarios}             [post]
* @endpoint {/enlaces}              [get]
* @endpoint {/imagenes}             [get]
* @endpoint {/resrevas}             [get, post, put]
* @endpoint {/reservas/:id}         [delete]
* @endpoint {/rooms}                [get]
* @endpoint {/imagenesGrid}         [get]
* @endpoint {/imagenesGridDisabled} [get]
* @endpoint {/servicios}            [get]
* @endpoint {/anfitriones}          [get]
* @endpoint {/rrss}                 [get]
* @endpoint {/services}             [get]
* @endpoint {/message}              [post]
*
* @route {GET}     / Nos muestra una lista de todos los datos
* @route {POST}    / Recibe los datos desde el body y los añade a la BD
* @route {PUT}     / Recibe los datos desde el body y los actualiza en la BD
* @route {DELETE}  / Elimina un dato
* _____________________________________________________ */

const express = require('express')
const { getBasic, getUsuarios, postUsuarios, postLogin } = require('../controllers/login')
const { getEnlaces } = require('../controllers/header')
const { getImagenes, getRoomsLightbox, getImagenesGrid, getImagenesGridDisabled, getAnfitriones, getServicios, getServices } = require('../controllers/main')
const { getRrss, postMensajes } = require('../controllers/footer')
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
    .post(postMensajes)

module.exports = {
    router
}