// // // CODE TANPA req,res DARI post MASUK KE FOLDER CONTROLLERS
// const userRouter = require('express').Router()

// userRouter.get('/', (req, res)=>{
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

// module.exports = userRouter

// // CODE req,res DARI post MASUK KE FOLDER CONTROLLERS
const userRouter = require('express').Router()

// IMPOR/AMBIL DATA MENGGUNAKAN require DARI FOLDER CONTROLLERS
const userController = require('../controllers/users.controller')

// IMPOR/AMBIL DATA MENGGUNAKAN get DARI VARIABEL userControllers
userRouter.get('/', userController.getAllusers)
// INSERT/MENGIRIM DATA/DATA USER BARU
userRouter.post('/', userController.createUsers)

// MERUBAH DATA SEBAGIAN
userRouter.patch('/', userController.repairUsers)

//MEGHAPUS DATA
userRouter.delete('/', userController.deleteUsers)


module.exports = userRouter