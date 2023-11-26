const productRouter = require('express').Router()

// const multer = require('multer')

const productController = require('../../controllers/admin/products.controller')
const uploadMiddleware = require('../../middlewares/upload.middleware')

// const upload = multer({dest: 'uploads/'})

productRouter.get('/', productController.getAllProducts)

productRouter.get('/:id', productController.getdetailproduct)

productRouter.post('/', productController.createproducts)

productRouter.patch('/:id', uploadMiddleware('products').single('image'), productController.updateproducts)

productRouter.delete('/:id', productController.deleteproducts)

module.exports = productRouter