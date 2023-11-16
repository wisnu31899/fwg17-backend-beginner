// // CODE TANPA req,res DARI post MASUK KE FOLDER CONTROLLERS
// // IMPOR DATA 'express'
// const authRouter = require('express').Router()

// // // KIRIM DATA HARUS PAKAI POST(POSTMAN(POST/BODY/WWW.ENKCODED))
// authRouter.post('/login', (req, res)=>{
//     const {username, password} = req.body
//     if(username === 'wisnu123' && password === 'wisnu123'){
//         return res.json({
//             success: true,
//             message: 'login success'
//         })
//     }else{
//         return res.json({
//             success: false,
//             message: 'wrong username or password'
//         })
//     }
// })

// module.exports = authRouter

// CODE req,res DARI post MASUK KE FOLDER CONTROLLERS
// IMPOR DATA 'express'
const authRouter = require('express').Router()

// IMPOR/AMBIL DATA MENGGUNAKAN require DARI VARIABEL authRouter
const authController = require('../controllers/auth.controller')

// KIRIM DATA HARUS PAKAI POST(POSTMAN(POST/BODY/WWW.ENKCODED))
authRouter.post('/login', authController.login)

module.exports = authRouter