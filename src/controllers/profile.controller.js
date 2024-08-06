const userModel = require('../models/users.model')
const cloudinary = require('../util/customCloudinary')
const uploadMiddleware = require('../middlewares/upload.middleware')
const errorHandlerImg = require('../lib/errorHandlerImg.lib')
const upload = uploadMiddleware('profile').single('picture')
const fs = require('fs/promises')
const path = require('path')
const argon = require('argon2')


exports.getProfile = async (req, res) => {
    const { id } = req.user
    const user = await userModel.findOneUser(id)
    // console.log(user[0].password)
    if (user[0].password) {
        delete user[0].password
    }
    return res.json({
        success: true,
        message: 'success get profile',
        results: user
    })
}

exports.updateProfile = async (req, res) => {
    upload(req, res, async (err) => {
        try {
            if (err) {
                throw err
            }
            const { id } = req.user
            // console.log(req.body)
            if (req.body.password) {
                req.body.password = await argon.hash(req.body.password)
            }

            if (req.file) {
                const pictures = await cloudinary.uploader.upload(req.file.path, {
                    folder: 'js-coffee-shop/users'
                })

                req.body.picture = pictures.secure_url

                // if(user.picture){
                //     const savePicture = path.join(global.path, 'uploads', 'profile', user.picture)
                //     fs.access(savePicture, fs.constants.R_OK)
                //     .then(() => {
                //         fs.rm(savePicture)
                //     }).catch(()=>{})
                // }
                // req.body.picture = req.file.filename

                // if(user.picture){
                //     cloudinary.search
                //     .expression(`${encodeURIComponent(user.picture)}`)
                //     .max_results(1)
                //     .execute()
                //     .then(result => {
                //         cloudinary.uploader.destroy(result.resources[0].public_id)
                //         .then(result => console.log({...result, message: "delete picture success"}))
                //         .catch(err => {
                //             return errorHandler(err, res)
                //         })
                //     }).catch(err => {
                //         return errorHandler(err, res)
                //     })
                // }


                // console.log(req.file)
                // req.body.picture = req.file.filename
                // req.body.picture = req.file.path
            }
            const user = await userModel.update(parseInt(id), req.body)
            if (user.password) {
                delete user.password
            }
            return res.json({
                success: true,
                message: 'success update profile',
                results: user
            })
        } catch (err) {
            errorHandlerImg(err, res)
        }
    })
}