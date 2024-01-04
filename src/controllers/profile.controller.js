const userModel = require('../models/users.model')
const uploadMiddleware = require('../middlewares/upload.middleware')
const errorHandlerImg = require('../lib/errorHandlerImg.lib')
const upload = uploadMiddleware('profile').single('picture')
const fs = require('fs/promises')
const path = require('path')

exports.getProfile = async (req, res) => {
    const {id} = req.user
    const user = await userModel.findOne(id)
    // console.log(user[0].password)
    if(user[0].password){
        delete user[0].password
    }
    return res.json({
        success: true,
        message: 'success get profile',
        results: user
    })
}

exports.updateProfile = async (req, res) => {
    upload(req, res, async (err)=>{
        try{
            if(err){
                throw err
            }
            const {id} = req.user
            if(req.file){
                const user = await userModel.findOne(id)
                if(user.picture){
                    const savePicture = path.join(global.path, 'uploads', 'profile', data.picture)
                    fs.access(savePicture, fs.constants.R_OK)
                    .then(() => {
                        fs.rm(savePicture)
                    }).catch(()=>{})
                }
                req.body.picture = req.file.filename
            }
            const user = await userModel.update(parseInt(id), req.body)
            if(user.password){
                delete user.password
            }
            return res.json({
                success: true,
                message: 'success update profile',
                results: user
            })
        }catch(err){
            errorHandlerImg(err, res)
        }
    })
}