const productModel = require('../../models/products.model')
const fs = require('fs/promises')
const path = require('path')
const uploadMiddleware = require('../../middlewares/upload.middleware')
const errorHandlerImg = require('../../lib/errorHandlerImg.lib')
const upload = uploadMiddleware('products').single('image')

exports.getallproducts = async (req, res) => {
        const {search, sortBy, orderBy, page=1, limit, bestSeller } = req.query

        const limitData = parseInt(limit) || 4
        const count = await productModel.countAll(search)
        const products = await productModel.findAll(search, sortBy, orderBy, page, limit, bestSeller)

        // if(!products.length < 1){
        //     return res.status(404).json({
        //         success: false,
        //         message: "No Data!"
        //     })
        // }

        const totalPage = Math.ceil(count / limitData)
        const nextPage = parseInt(page) + 1
        const prevPage = parseInt(page) - 1
        
        // const products = await productModel.findAll()
        return res.json({
            success: true,
            message: 'list all product',
            pageInfo: {
                currentPage: parseInt(page),
                totalPage,
                nextPage: nextPage <= totalPage ? nextPage : null,
                prevPage: prevPage >= 1 ? prevPage : null,
                totalData: count
            },
            results: products
        })
}

exports.getdetailproduct = async (req, res) => {
    // //SINGKAT
    // return res.json({
    //     success: true,
    //     message:'detail product'
    // })

    const id = parseInt(req.params.id)
    const product = await productModel.findOne(id)
    // if (!product) {
    //     return res.status(404).json({
    //         success: false,
    //         message: 'product not found'
    //     })
    // }
    return res.json({
        success: true,
        message: 'detail product',
        results: product
    })
}

exports.createproduct = async (req, res) => {
    upload(req, res, async (err)=>{
        try {
            // if (err) {
            //     throw err
            // }
            if (req.file) {
                req.body.image = req.file.filename
            }
            const product = await productModel.create(req.body)

            // // PROGRAM PENAMAAN DENGAN id NAMUN MASUH BUG
            // if(req.file){
            //     const exstensi = {
            //         'image/jpeg' : '.jpg',
            //         'image/png' : '.png'
            //     }
            //     // req.body.image = req.file.filename
            //     const uploadLocation = path.join(global.path, 'uploads', 'products')
            //     const fileLocation = path.join(uploadLocation, req.file.filename)
            //     const filename = `${product.id}${exstensi[req.file.mimetype]}`
            //     const newLocation = path.join(uploadLocation, filename)

            //     await fs.rename(fileLocation, newLocation)
            //     const renamedProduct = await productModel.update(product.id, {
            //         image: filename,
            //     })
            //         return res.json({
            //     success: true,
            //     message: 'success',
            //     results: renamedProduct
            //         })
            // }
            // const product = await productModel.create(req.body)
            return res.json({
                success: true,
                message: 'create success',
                results: product
            })
        } catch (err) {
            console.log(err)
            errorHandlerImg(err, res)
        }
    })
}

exports.updateproduct = async (req, res) => {
    upload(req, res, async (err)=>{
        try {
            if (err) {
                throw err
            }
            const {id} = req.params
            const data = await productModel.findOne(id)

            if (!data) {
                throw new Error('not found')
            }

            if(req.file) {
                if (data.image) {
                    const uploadLocation = path.join(global.path, 'uploads', 'products', data.image)
                    fs.access(uploadLocation, fs.constants.R_OK)
                    .then(() => {
                        fs.rm(uploadLocation)
                    }).catch(()=>{})
                }
                req.body.image = req.file.filename
            }
            const product = await productModel.update(id, req.body)
            console.log(product)
            return res.json({
                success: true,
                message: 'update success',
                results: product
            })

        } catch (err) {
            console.log(err)
            errorHandlerImg(err, res)
        }
    })
}

exports.deleteproduct = async (req, res) => {
    try {
        const id = (req.params.id)
        const deleted = await productModel.delete(id)
        if (deleted.image) {
            const uploadLocation = path.join(global.path, 'uploads', 'products', deleted.image)
            fs.access(uploadLocation, fs.constants.R_OK)
            .then(() => {
                fs.rm(uploadLocation)
            }).catch(()=>{})
        }
        return res.json({
            success: true,
            message: 'delete success',
            results: deleted
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }
}