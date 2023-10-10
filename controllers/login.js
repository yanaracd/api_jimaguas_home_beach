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

    const existe = await Usuario.findOne({user})
    
    if( existe === null ){
        const nuevo = new Usuario({ name , lastName , user , pass })
        await nuevo.save()

        let mensaje = `Usuario creado correctamente`
        res.json( mensaje )
    }else{
        let mensaje = `El usuario ya existe`
        res.json( mensaje )
    }   
        
}

module.exports = {
    getBasic,
    postLogin,
    // getUsuarios
    postUsuarios
}