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

exports.getAllusers = async (req, res) => {
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
    if(!user[0]){
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
    try{
        const user = await userModel.insert(req.body)
        return res.json({
            success: true,
            message: 'create user success',
            result: user
        })
    }catch(err){
        if(err.code === '23502'){
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

//belum
exports.updateUsers = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const userId = users.map(user => user.id).indexOf(parseInt(id))
    if(userId === -1){
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
    users[userId].name = name
    return res.json({
        success: true,
        message: 'success',
        result: users[userId]
    })
}

//belum
exports.deleteUsers = (req, res)=>{
    const {id} = req.params
    const user = users.filter(user => user.id === parseInt(id))
    if(!user.length){
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
    users = users.filter(user => user.id !== parseInt(id))
    return res.json({
        success: true,
        message: 'success',
        result: user[0]
    })
}