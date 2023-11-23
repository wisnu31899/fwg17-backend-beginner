const router = require('express').Router()

const authMiddleware = require('../middlewares/auth.middleware')
const roleCheckMiddleware = require('../middlewares/roleCheck.middleware')

router.use('/auth', require('./auth.router'))

router.use('/admin',authMiddleware, roleCheckMiddleware('admin'), require('./admin'))

module.exports = router