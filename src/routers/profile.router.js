const profileRouter = require('express').Router()

const profileController = require('../controllers/profile.controller')

profileRouter.get('/', profileController.getProfile)

profileRouter.patch('/', profileController.updateProfile)

module.exports = profileRouter