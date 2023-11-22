const userModel = require('../models/users.model')
const argon = require('argon2')



exports.login = (req, res)=>{
    const {username, password} = req.body
    if(username === 'wisnu123' && password === 'wisnu123'){
        return res.json({
            success: true,
            message: 'login success'
        })
    }else{
        return res.json({
            success: false,
            message: 'wrong username or password'
        })
    }
}

exports.register = async (req, res)=>{
    try{
        const {fullName, email, password, phoneNumber} = req.body
        
        const hashed = await argon.hash(password)
        
        const user = userModel.create({
            fullName,
            email,
            password: hashed,
            phoneNumber
        })
        return res.json({
            success: true,
            message: 'register success',
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}