/* ____________________________________________________ *\
* API Express
* Conectamos con la Base de Datos jimaguas_home_beach para devolver la información
* 
* @middlewares {cors, nodemon}
* @routing     {Express Router}
* @odm         {mongoose}
* _____________________________________________________ */


console.clear()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { router } = require('./router/router')

require('dotenv').config()

const app = express()

let URL = process.env.URL || 'mongodb://127.0.0.1:27017/jimaguas_home_beach'

const conectar = async () =>
    await mongoose.connect(URL)
        .then(res => {
            console.log('Conectado a MongoDB')
        })
        .catch(err => console.log(err))

conectar()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.all('*', (req, res, next) => {
    const err = new Error(`Endpoint NO existe`)
    err.status = 404
    err.message = `Endpoint NO existe`
    next(err)
})

app.use((error, req, res, next) => {
    let { status, message } = error
    status = status || 500

    res.status(500).json({ status, message })
})

app.listen(3000, () => {
    console.log('Iniciando API')
})