// const db = require('../lib/db.lib')
const checkoutModel = require('../models/checkout.models')

exports.getPriceSize = async (req, res) => {                                        
    try {
        const size = await checkoutModel.getDataBySizeName(req.query.name)
        if(!size){
            throw new Error(`size not found`)
        }
        return res.json({                                                              
            success: true,
            message: 'detail size',
            results: size                                                  
        })
    } catch (err) {
        if(err.message){
            return res.status(401).json({
                success: false,
                message: err.message
            })
        }
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

exports.getPriceVariant = async (req, res) => {                                        
    try {
        const variant = await checkoutModel.getDataByVariantName(req.query.name)
        if(!variant){
            throw new Error(`variant not found`)
        }
        return res.json({                                                              
            success: true,
            message: 'detail variant',
            results: variant                                                  
        })
    } catch (err) {
        if(err.message){
            return res.status(401).json({
                success: false,
                message: err.message
            })
        }
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

exports.shipping = async (req, res) => {                                        
    try {
        const delivery = await checkoutModel.getDataByShipping(req.query.name)
        if(!delivery){
            throw new Error(`delivery not found`)
        }
        return res.json({                                                              
            success: true,
            message: 'detail delivery',
            results: delivery                                                  
        })
    } catch (err) {
        if(err.message){
            return res.status(401).json({
                success: false,
                message: err.message
            })
        }
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}