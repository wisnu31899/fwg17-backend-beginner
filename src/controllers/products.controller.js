let productModel = require('../models/products.model')

exports.getAllProducts = async (req, res) => {
    const products = await productModel.findAll()
    return res.json({
        success: true,
        message: 'list all products',
        result: products
    })
}

exports.getDetailProduct = async (req, res) => {
    const id = parseInt(req.params.id)
    const product = await productModel.findOne(id)
    if (!product[0]) {
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }
    return res.json({
        success: true,
        message: 'detail product',
        result: product[0]
    })
}

exports.createProducts = async (req, res) => {
    const data = req.body
    try {
        const product = await productModel.create(data)
        return res.json({
            success: true,
            message: 'create product success',
            result: product[0]
        })
    } catch (err) {
        if (err.code === '23502') {
            return res.status(400).json({
                success: false,
                message: `${err.column} cannot be empty`
            })
        }
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

exports.updateProducts = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    try {
        const product = await productModel.update(data, id)
        return res.json({
            success: true,
            message: 'success',
            result: product[0]
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }
}

exports.deleteProducts = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const product = await productModel.delete(id)
        return res.json({
            success: true,
            message: 'success',
            result: product[0]
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }
}