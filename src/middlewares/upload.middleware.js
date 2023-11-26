const multer = require('multer')
const path = require('path')

const storage = (dest, filename) => multer.diskStorage ({
    destination: (req, file, cb) =>{
        cb(null, path.join('uploads',dest))
    },
    filename: (req, file, cb) =>{

        //JIKA MENGGUNAKAN NAMA DARI ID USERS
        const exstensi = {
            'image/jpeg' : '.jpg',
            'image/png' : '.png',
        }
        if(!filename){
            filename = req.params.id
        }

        cb(null, `${filename}${exstensi[file.mimetype]}`)

        //JIKA MENGGUNAKAN NAMA ASLI DARI FILE
        // console.log(file)
        // cb(null, file.originalname)
    }
})

const uploadMiddleware = (type, file) =>{
    const processUpload = multer ({
        storage: storage(type, file),
        limits: {fileSize: 1*1024*1024}
    })
    return processUpload
}
module.exports = uploadMiddleware