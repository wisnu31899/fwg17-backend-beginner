let orderModel = require('../../models/orders.model')
const userModel = require('../../models/users.model')
// let deliveryModel = require('../../models/delivery.model')
const productModel = require('../../models/products.model')
const checkoutModel = require('../../models/checkout.models')
const moment = require('moment')
const { getProductSizeVariantAndDelivery } = require('../../helper/order.helper')



exports.getAllOrder = async (req, res) => {
    const { id: userId } = req.user
    console.log(userId)
    const order = await orderModel.findAll(userId)
    return res.json({
        success: true,
        message: 'list all order',
        results: order
    })
}

exports.detailOrder = async (req, res) => {
    const id = parseInt(req.params.id)
    const orders = await orderModel.findOne(id)
    console.log(orders)
    return res.json({
        success: true,
        message: 'get detail order success',
        results: orders
    })
}

exports.createOrder = async (req, res) => {
    const { id } = req.user
    try {
        //ambil data user login
        const user = await userModel.findOneUser(id)

        //buatkan orderNumber rando,
        const currentDate = moment().format("DDMMYYYY")
        const lastOrderNumber = await orderModel.getLastOrderId()
        const newOrderNumber = (parseInt(lastOrderNumber[0].max) + 1).toString().padStart(4, '0')
        const orderNumber = `#001-${currentDate}-${newOrderNumber}`

        // Periksa apakah req.body.status kosong atau null, jika ya, atur ke 'ON-PROCESS'
        const status = req.body.status || 'ON-PROCCESS';

        const data = {
            userId: id,
            orderNumber: orderNumber,
            promoId: req.body.promoId,
            total: req.body.total,
            taxAmount: req.body.taxAmount,
            status: status,
            address: req.body.address,
            fullName: req.body.fullName,
            email: req.body.email,
        }

        // Periksa jika nilai dari req.body.deliveryAddress adalah undefined, kosong, atau null
        if (!data.address && user[0].address) {
            data.address = user[0].address;
        }

        // Periksa jika nilai dari req.body.fullName adalah undefined, kosong, atau null
        if (!data.fullName && user[0].fullName) {
            data.fullName = user[0].fullName;
        }

        // Periksa jika nilai dari req.body.email adalah undefined, kosong, atau null
        if (!data.email && user[0].email) {
            data.email = user[0].email;
        }
        // Membuat pesanan
        const order = await orderModel.create(data);
        return res.json({
            success: true,
            message: 'create order success',
            results: order
        })
    } catch (err) {
        // console.log(err)
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

// exports.paymentDetail = async (req, res) => {
//     const { id: userId } = req.user
//     try {
//         const orders = await orderModel.findPriceByIdUser(userId)
//         console.log(orders)
//         // Menghitung subtotal dengan menambahkan total harga produk, harga pengiriman, dan pajak dari setiap pesanan
//         let subTotal = orders.reduce((acc, order) => {
//             const totalProductPrice = order.productPrice + order.sizePrice + order.variantPrice;
//             const totalPrice = totalProductPrice + order.deliveryPrice + order.taxAmount;
//             return acc + totalPrice;
//         }, 0);

//         return res.json({
//             success: true,
//             message: 'Payment detail retrieved successfully',
//             subTotal: subTotal
//         });
//     } catch (err) {
//         // console.log(err);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }

// }

// exports.historyOrder = async (req, res) => {
//     const { id: userId } = req.user;
//     try {
//         // Fungsi untuk menghitung subtotal
//         const calculateSubTotal = (order) => {
//             const totalProductPrice = order.productPrice + order.sizePrice + order.variantPrice;
//             const totalPrice = totalProductPrice + order.deliveryPrice + order.taxAmount;
//             return totalPrice;
//         }
//         const orders = await orderModel.findPriceByIdUser(userId);
//         const history = orders.map(order => ({
//             orderNumber: order.orderNumber,
//             orderDate: order.createdAt,
//             total: calculateSubTotal(order),
//             status: order.status
//         }));

//         return res.json({
//             success: true,
//             message: 'Order history retrieved successfully',
//             history: history
//         });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }
// }

// exports.detailOrderAndInfoUser = async (req, res) => {
//     const { id: userId } = req.user;
//     try {
//         // Mendapatkan detail order dan informasi user dengan memanggil fungsi findOneByFullUser
//         const orderResult = await orderModel.findOneByFullUser(userId);

//         // Menghitung subTotal dengan menggunakan fungsi calculateSubTotal
//         const calculateSubTotal = (order) => {
//             const totalProductPrice = order.productPrice + order.sizePrice + order.variantPrice;
//             const totalPrice = totalProductPrice + order.deliveryPrice + order.taxAmount;
//             return totalPrice;
//         };

//         // Menghitung total subtotal
//         const orders = await orderModel.findPriceByIdUser(userId);
//         let subTotal = 0;
//         const subTotals = orders.map(order => {
//             const total = calculateSubTotal(order);
//             subTotal += total;
//             return total;
//         });

//         // Menggabungkan hasil order dengan subTotal
//         const result = {
//             orders: orderResult,
//             subTotal: subTotal
//         };


//         return res.json({
//             success: true,
//             message: 'Order detail and user information retrieved successfully',
//             result: result
//         });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }
// }
