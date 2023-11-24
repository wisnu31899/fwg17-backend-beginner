let productModel = require('../../models/products.model')

exports.getAllProducts  = async (req, res) => {
    const {searching, sortBy, orderBy, page} = req.query
    const products = await productModel.findByName(searching, sortBy, orderBy, page)
    return res.json({
        success: true,
        message: 'list all product',
        results: products
    })
}

exports.getdetailproduct = async (req, res) => {
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
        results: product[0]
    })
}

exports.createproducts = async (req, res) => {
    const data = req.body
    try {
        const product = await productModel.create(data)
        return res.json({
            success: true,
            message: 'create success',
            results: product
        })
    } catch (err) {
        if (err.code === '23502') {
            return res.status(400).json({
                success: false,
                message: `data cannot be empty`
            })
        }
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

exports.updateproducts = async (req, res) => {
    const {id} = req.params
    try {
        if(req.file){
            req.body.image = req.file.filename
        }

        const product = await productModel.update(req.body, id)
        return res.json({
            success: true,
            message: 'update success',
            results: product
        })
    } catch (err) {
        if(err.code === "42703"){
            return res.status(404).json({
                success: false,
                message: 'product not found'
            })   
        }
    console.log(err)
    return res.status(500).json({
            success: false,
            message: 'internet server error'
        })
    } 
}

exports.deleteproducts = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const product = await productModel.delete(id)
        return res.json({
            success: true,
            message: 'delete success',
            results: product
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'product not found'
        })
    }
}