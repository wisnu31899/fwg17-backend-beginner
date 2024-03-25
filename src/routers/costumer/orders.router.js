const orderRouter = require('express').Router()

const orderController = require('../../controllers/customer/orders.controller')

// orderRouter.get('/', orderController.getAllOrder)

orderRouter.get('/', orderController.getAllOrder)

orderRouter.post('', orderController.createOrder)

orderRouter.get('/:id', orderController.detailOrder)

// orderRouter.get('/historyOrder', orderController.historyOrder)

// orderRouter.get('/orderAndInfoUser', orderController.detailOrderAndInfoUser)


// orderRouter.delete('/:id', orderController.deleteOrder)

module.exports = orderRouter