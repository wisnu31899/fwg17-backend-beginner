// let users = [
//     {
//         id: 1,
//         name: 'wisnu'
//     }, {
//         id: 2,
//         name: 'gab'
//     }
// ]

// let countUser = users.length

let userModel = require('../models/users.model')

exports.getAllUsers = async (req, res) => {
    const users = await userModel.findAll()
    return res.json({
        success: true,
        message: 'list all users',
        result: users
    })
}

exports.getDetailUser = async (req, res) => {
    const id = parseInt(req.params.id)
    const user = await userModel.findOne(id)
    if (!user[0]) {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
    return res.json({
        success: true,
        message: 'detail user',
        result: user[0]
    })
}

exports.createUsers = async (req, res) => {
    const data = req.body
    try {
        const user = await userModel.create(data)
        return res.json({
            success: true,
            message: 'create user success',
            result: user[0]
        })
    } catch (err) {
        if (err.code === '23502') {
            return res.status(400).json({
                success: false,
                message: `${err.column} cannot be empty`
            })
        }
        console.log(err)
        return res.status(500).json({
            success: false,
            message: 'internal server error'
        })
    }
}

exports.updateUsers = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    try {
        const user = await userModel.update(data, id)
        return res.json({
            success: true,
            message: 'success',
            result: user[0]
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
}

exports.deleteUsers = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const user = await userModel.delete(id)
        return res.json({
            success: true,
            message: 'success',
            result: user[0]
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
}