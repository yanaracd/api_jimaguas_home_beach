const mongoose    = require("mongoose")
const { Usuario } = require("../models/Usuario")

const getBasic = ( req , res )=>{

    res.json('Haciendo GET en /')
}

const postLogin = async ( req , res )=>{

    const { user , pass } = req.body

    const buscar = await Usuario.findOne({ user , pass })
    
    if( buscar !== null ){
        res.json({ login : true })
    }else{
        res.json({ login : false })
    }
}

// const getUsuarios = async ( req , res )=>{

//     const buscar = await Usuario.find()
//     res.json( buscar )
// }

// const postUsuarios = async ( req , res , next )=>{

//     const { user , pass } = req.body

//     const sesion = await mongoose.startSession()
//           sesion.startTransaction()

//     try {
//         const nuevo = new Usuario({ user , pass })
//         await nuevo.save()

//         const buscar = await Usuario.find()
//         await sesion.commitTransaction()

//         res.json( buscar )        
//     } catch ( err ) {
//         await sesion.abortTransaction()
//         next( err )
//     }finally{
//         await sesion.endSession()
//     }
        
// }

module.exports = {
    getBasic,
    postLogin
    // getUsuarios,
    // postUsuarios
}