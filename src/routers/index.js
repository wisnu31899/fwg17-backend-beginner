// require UNTUK IMPOR 'express'
const router = require('express').Router()

// AMBIL DATA DARI FILE 'auth.router.js'
router.use('/auth', require('./auth.router'))
// AMBIL DATA DARI FILE 'users.router.js'
router.use('/users', require('./users.router'))

module.exports = router