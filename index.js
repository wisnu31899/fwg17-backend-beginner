// // INI SEMUA PROGRAM SINCRONUS
// // FULL CODE
// // DEVINISI VARIABEL
// // require UNTUK IMPOR DARI LIBRARY express YANG DIINSTALL
// const express = require('express')

// const app = express()

// // REQ YANG DIKIRIM USER PAKAI MIDDLEWARE
// app.use(express.urlencoded({extended: false}))

// // KIRIM DATA HARUS PAKAI POST(POSTMAN(POST/BODY/WWW.ENKCODED))
// app.post('/auth/login',(req, res)=>{
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
//     // // ALTERNATIF CODE
//     // if(req.body.username === 'wisnu123' && req.body.password === 'wisnu123'){
//     //     return res.json({
//     //         success: true,
//     //         message: 'login success'
//     //     })
//     // }else{
//     //     return res.json({
//     //         success: false,
//     //         message: 'wrong username or password'
//     //     })
//     // }
// })

// // GET (MENDAPATKAN/MENAMPILKAN CODE DI POSTMAN (GET/PARAMS) USER)
// app.get('/', (req, res) =>{
//     // // REQ ATAU USE PINDAH KE ATAS
//     // console.log(req.body)
//     // UNTUK RES.GET
//     return res.json({
//         success: true,
//         message: 'Backend is running well'
//     })
// })

// app.get('/users', (req, res)=>{
//     return res.json({
//         success: true,
//         message: 'list all users',
//         result:[
//             {
//                 id: 1,
//                 name: 'wisnu'
//             },
//             {
//                 id: 2,
//                 name: 'dzul'
//             }
//         ]
//     })
// })

// PROGRAM RUN PORT MENERIMA request dari PORT
// app.listen(8888, () =>{
//     console.log('app listening on port 8888')
// })


// PROGRAM PECAH KE FOLDER FOLDER
// DEVINISI VARIABEL
// // require UNTUK IMPOR DARI LIBRARY express YANG DIINSTALL
const express = require('express')

const app = express()

// REQ YANG DIKIRIM USER PAKAI MIDDLEWARE
app.use(express.urlencoded({extended: false}))

// KIRIM DATA HARUS PAKAI POST(POSTMAN(POST/BODY/WWW.ENKCODED))
// AMBIL DATA MENGGUNAKAN USE DI FOLDER Router
app.use('/', require('./src/routers'))

// GET (MENDAPATKAN/MENAMPILKAN CODE DI POSTMAN (GET/PARAMS))
//B=
app.get('/', (req, res) =>{
    // // REQ ATAU USE PINDAH KE ATAS
    // console.log(req.body)
    // UNTUK RES.GET
    return res.json({
        success: true,
        message: 'Backend is running well'
    })
})

// PROGRAM RUN PORT MENERIMA request dari PORT
app.listen(8888, () =>{
    console.log('app listening on port 8888')
})
