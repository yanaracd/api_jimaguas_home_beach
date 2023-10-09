const mongoose    = require("mongoose")
const { Usuario } = require("../models/Usuario")

const getBasic = ( req , res )=>{

    res.json('Haciendo GET en /')
}

const postLogin = async ( req , res )=>{

    const { user , pass } = req.body

    const buscar = await Usuario.findOne({ user , pass })

    let login   = buscar !== null ? true : false
    let mensaje = buscar !== null ? `Usuario encontrado` : `Usuario no encontrado`

    res.json({ login , mensaje })
}

// const getUsuarios = async ( req , res )=>{

//     const buscar = await Usuario.find()
//     res.json( buscar )
// }

const postUsuarios = async ( req , res , next )=>{

    const { name , lastName , user , pass } = req.body
    console.log({ name , lastName , user , pass })

    // const sesion = await mongoose.startSession()
    //       sesion.startTransaction()

    // try {
    //     const nuevo = new Usuario({ user , pass })
    //     await nuevo.save()

    //     const buscar = await Usuario.find()
    //     await sesion.commitTransaction()

    //     res.json( buscar )        
    // } catch ( err ) {
    //     await sesion.abortTransaction()
    //     next( err )
    // }finally{
    //     await sesion.endSession()
    // }
        
}

module.exports = {
    getBasic,
    postLogin,
    // getUsuarios
    postUsuarios
}