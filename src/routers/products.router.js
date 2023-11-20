const productRouter = require('express').Router()

const productController = require('../controllers/products.controller')

productRouter.get('/', productController.getAllProducts)

productRouter.get('/:id', productController.getDetailProduct)

productRouter.post('/', productController.createProducts)

productRouter.patch('/:id', productController.updateProducts)

productRouter.delete('/:id', productController.deleteProducts)

module.exports = productRouter