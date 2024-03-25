const orderdetailsRouter = require('express').Router()

const orderdetailsController = require('../../controllers/customer/orderDetails.controller')

orderdetailsRouter.get('/', orderdetailsController.getAllOrderDetails)

orderdetailsRouter.get('/:id', orderdetailsController.getOrderDetails)

orderdetailsRouter.get('/detail/:id', orderdetailsController.getOrderDetailsByOrderId)


orderdetailsRouter.post('/', orderdetailsController.createOrderDetails)

orderdetailsRouter.patch('/:id', orderdetailsController.updateOrderDetails)

orderdetailsRouter.delete('/:id', orderdetailsController.deleteOrderDetails)

module.exports = orderdetailsRouter