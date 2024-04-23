const multer = require('multer')
const path = require('path')
// const { CloudinaryStorage } = require('multer-storage-cloudinary')
// const  { v2: cloudinary } = require ("cloudinary");
const {v4: uuidv4} = require('uuid')//DOWNLOAD DULU

const storage = (dest, filename) => multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('uploads',dest))
    },
    filename: (req, file, cb) =>{
        //MENAMBAHKAN .jpg DIBELAKANG NAMA
        const exstensi = {
            'image/jpeg' : '.jpg',
            'image/png' : '.png',
        }
        // //JIKA MENGGUNAKAN NAMA DARI ID USERS
        // if(!filename && req.params.id){
        //     filename = req.params.id
        // }else if(!filename){
        //     filename = new Date().getTime()
        // }

        // MENGGUNAKAN UUID SEBAGAI NAMA
        filename = uuidv4()
        cb(null, `${filename}${exstensi[file.mimetype]}`)

        //MENGGUNAKAN WAKTU SEBAGAI NAMA
        // filename = new Date().getTime()
        // cb(null, `${filename}${exstensi[file.mimetype]}`)

        //JIKA MENGGUNAKAN NAMA ASLI DARI FILE
        // console.log(file)
        // cb(null, file.originalname)
    }
})


// //pakai cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET
// })

// const storage = (dest) => new CloudinaryStorage({
//     cloudinary,
//     params: async (req, file) =>  {

//         const extension = {
//           "image/jpeg": "jpg",
//           "image/png": "png",
//         }

//         return {
//             folder: `js-coffee-shop/${dest}`,
//             format: extension[file.mimetype],
//             public_id: uuidv4()
//         }
//     }
// })

const uploadMiddleware = (type, file) =>{
    const processUpload = multer ({
        storage: storage(type, file),
        //MEMBERIKAN BATAS PADA UKURAN GAMBAR
        limits: {
            fileSize: 3*1024*1024
        },
        //MEMBERIKAN FILTER UNTUK JENIS FILE DAN WAJIB GAMBAR
        fileFilter: (req, file, cb)=>{
            const extensi = ['image/jpeg','image/gif','image/bmp','image/png']
            if(!extensi.includes(file.mimetype)){
                cb(new Error('file_issue'), false)
            }else{
                cb(null, true)
            }
        }
    })
    return processUpload
}
module.exports = uploadMiddleware