let userModel = require('../../models/users.model')
const argon = require('argon2')
const path = require('path')
const uploadMiddleware = require('../../middlewares/upload.middleware')
const errorHandlerImg = require('../../lib/errorHandlerImg.lib')
const upload = uploadMiddleware('profile').single('picture')
const fs = require('fs/promises')

exports.getallusers = async (req, res) => {
    try {
        const { keyword, sortBy, orderBy, page = 1, limit } = req.query
        const limitData = (limit) || 5

        const count = await userModel.countAll(keyword)
        const users = await userModel.findAll(keyword, sortBy, orderBy, page, limit)

        const totalPage = Math.ceil(count / limitData)
        const nextPage = parseInt(page) + 1
        const prevPage = parseInt(page) - 1

        // const products = await productModel.findAll()
        return res.json({
            success: true,
            message: 'list all users',
            pageInfo: {
                currentPage: parseInt(page),
                totalPage,
                nextPage: nextPage <= totalPage ? nextPage : null,
                prevPage: prevPage >= 1 ? prevPage : null,
                totalData: count
            },
            results: users
        })
    } catch (err){
        errorHandlerImg(err, res)
    }
}

exports.getdetailuser = async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await userModel.findOneUser(id)
    if (!user[0]) {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
    return res.json({
        success: true,
        message: 'detail user',
        result: user[0]
    })
}

exports.createusers = async (req, res) => {
    upload(req, res, async (err)=>{
        try{
            if(err){
                throw err
            }
            if(req.file){
                // if(user.picture){
                //     const savePicture = path.join(global.path, 'uploads', 'profile', data.picture)
                //     fs.access(savePicture, fs.constants.R_OK)
                //     .then(() => {
                //         fs.rm(savePicture)
                //     }).catch(()=>{})
                // }
                req.body.picture = req.file.filename
            }
            if(!req.body.fullName){
                throw new Error(`fullName not empty`)
            }
            if(!req.body.email){
                throw new Error(`email not empty`)
            }
            if(!req.body.password){
                throw new Error(`password not empty`)
            }
            req.body.password = await argon.hash(req.body.password)
            const user = await userModel.create(req.body)
            return res.json({
                success: true,
                message: 'create success',
                result: user
            })
        } catch (err) {
            console.log(err)
            if (err.code === '23505') {
                return res.status(400).json({
                    success: false,
                    message: err.detail
                });
            }
            if (err.message) {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }
            console.log(err)
            return res.status(500).json({
                success: false,
                message: 'internal server error'
            })
            
        }
    })
    
}

exports.updateusers = async (req, res) => {
    upload(req, res, async (err)=>{
        try {
            if(err){
                throw new Error('file not extensi')
            }
            // const {id} = req.params
            // const {password} = req.body
            // const hashed = await argon.hash(password)
            // const user = await userModel.update({password: hashed}, id)
    
            const { id } = req.params
            const data = {
                ...req.body
            }
            if (req.body.password) {
                data.password = await argon.hash(req.body.password)
            }
            if(req.file) {
                if (data.picture) {
                    const uploadLocation = path.join(global.path, 'uploads', 'profile', data.picture)
                    fs.access(uploadLocation, fs.constants.R_OK)
                    .then(() => {
                        fs.rm(uploadLocation)
                    }).catch(()=>{})
                }
                data.picture = req.file.filename
            }
            
            const user = await userModel.update(id, data)
            if (user) {
                return res.json({
                    success: true,
                    message: 'update success',
                    results: user
                })
            } else {
                throw new Error('failed')
            }
        } catch (err) {
            if (err.message === 'failed') {
                return res.status(404).json({
                    success: false,
                    message: 'user not found'
                })
            }
            console.log(err)
        }
    })
   
}

exports.deleteusers = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const user = await userModel.delete(id)
        if (!user) {
            throw 'user not found'
        }
        if (user.picture) {
            const uploadLocation = path.join(global.path, 'uploads', 'profile', user.picture)
            fs.access(uploadLocation, fs.constants.R_OK)
            .then(() => {
                fs.rm(uploadLocation)
            }).catch(()=>{})
        }

        return res.json({
            success: true,
            message: 'delete success',
            result: user
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
}