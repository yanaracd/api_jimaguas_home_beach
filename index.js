console.clear()

const express     = require('express')
const cors        = require('cors')
const mongoose    = require('mongoose')
const { Usuario } = require('./models/Usuario')

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

app.get('/', async ( req , res )=>{

    const buscar = await Usuario.find()
    res.json( buscar )
})

app.post('/', async ( req , res , next )=>{

    const { user , pass } = req.body

    const sesion = await mongoose.startSession()
          sesion.startTransaction()

    try {
        const nuevo = new Usuario({ user , pass })
        await nuevo.save()

        const buscar = await Usuario.find()
        await sesion.commitTransaction()

        res.json( buscar )        
    } catch ( err ) {
        await sesion.abortTransaction()
        next( err )
    }finally{
        await sesion.endSession()
    }

    
})

app.listen( 3000, ()=>{
    console.log('Iniciando API')
})