const router = require('express').Router()

router.use('/auth', require('./auth.router'))

router.use('/admin', require('./admin'))

module.exports = router