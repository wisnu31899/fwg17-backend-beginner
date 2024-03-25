let orderdetailsModel = require('../../models/orderDetails.model')
const userModel = require('../../models/users.model')

exports.getAllOrderDetails = async (req, res) => {
    const orderDetails = await orderdetailsModel.findAll()
    return res.json({
        success: true,
        message: 'list all orderdetails',
        result: orderDetails
    })
}

exports.getOrderDetails = async (req, res) => {
    const id = parseInt(req.params.id)
    const orderDetails = await orderdetailsModel.findOne(id)
    if (!orderDetails[0]) {
        return res.status(404).json({
            success: false,
            message: 'orderdetails not found'
        })
    }
    return res.json({
        success: true,
        message: 'detail orderdetails',
        result: orderDetails[0]
    })
}

exports.getOrderDetailsByOrderId = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const orderDetails = await orderdetailsModel.findOnebyOrderId(orderId)
    if (!orderDetails[0]) {
        return res.status(404).json({
            success: false,
            message: 'orderdetails not found'
        })
    }
    return res.json({
        success: true,
        message: 'detail orderdetails',
        result: orderDetails[0]
    })
}

exports.createOrderDetails = async (req, res) => {
    const { id } = req.user
    try {
        //ambil data user login
        const user = await userModel.findOneUser(id)
        
        const quantity = req.body.quantity || 1;
        const data = {
            productId: req.body.productId,
            productSizeId: req.body.productSizeId,
            productVariantId: req.body.productVariantId,
            quantity: quantity,
            orderId: req.body.orderId,
            subTotal: req.body.subTotal,
        }

        // Membuat pesanan
        const detail = await orderdetailsModel.create(data);
        return res.json({
            success: true,
            message: 'create order detail success',
            results: detail
        })
    } catch (err) {
        console.log(err)
        if (err.message) {
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

exports.updateOrderDetails = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    try {
        const orderDetails = await orderdetailsModel.update(data, id)
        return res.json({
            success: true,
            message: 'success',
            result: orderDetails
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'orderdetails not found'
        })
    }
}

exports.deleteOrderDetails = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const orderDetails = await orderdetailsModel.delete(id)
        return res.json({
            success: true,
            message: 'success',
            result: orderDetails
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'orderdetails not found'
        })
    }
}