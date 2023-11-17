const userRouter = require('express').Router()

const userController = require('../controllers/users.controller')

userRouter.get('/', userController.getAllusers)

userRouter.get('/:id', userController.getDetailUser)

userRouter.post('/', userController.createUsers)

userRouter.patch('/:id', userController.updateUsers)

userRouter.delete('/:id', userController.deleteUsers)

module.exports = userRouter