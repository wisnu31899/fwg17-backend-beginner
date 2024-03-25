const router = require('express').Router()

const authMiddleware = require('../middlewares/auth.middleware')
const roleCheckMiddleware = require('../middlewares/roleCheck.middleware')
const checkoutController = require('../controllers/putSizeVariantDelivery.controller')

router.use('/auth', require('./auth.router'))

router.use('/products', require('./products.router'))

router.use('/admin',authMiddleware, roleCheckMiddleware('admin'), require('./admin'))

router.use('/customer',authMiddleware, roleCheckMiddleware('customer'), require('./costumer'))

router.use('/profile',authMiddleware, require('./profile.router'))


router.get('/dataSize', checkoutController.getPriceSize)
router.get('/dataVariant', checkoutController.getPriceVariant)
router.get('/dataDelivery', checkoutController.shipping)

module.exports = router