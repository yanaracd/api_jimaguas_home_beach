console.clear()

const express     = require('express')
const cors        = require('cors')
const mongoose    = require('mongoose')
const { router }  = require('./router/router')

require('dotenv').config()

const app = express()

let URL = process.env.URL || 'mongodb://127.0.0.1:27017/jimaguas_home_beach'

const conectar = async () => 
    await mongoose.connect(URL)
    .then( res => {
        console.log('Conectado a MongoDB')
    })
    .catch( err => console.log( err ))

conectar()

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended : false }))
app.use( router )

app.listen( 3000, ()=>{
    console.log('Iniciando API')
})