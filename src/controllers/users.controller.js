// variabel dengan isi array of object
let users = [
    {
        id: 1,
        name: 'wisnu'
    }, {
        id: 2,
        name: 'gab'
    }
]

let countUser = users.length

//PROSES TAMPA METHODE GUARDING ATAU OPERASI NEGASI ! (true menjadi false)
// PROSES DARI get
exports.getAllusers = (req, res) => {
    return res.json({
        success: true,
        message: 'list all users',
        result: users
    })
}
// PROSES DARI get parameter('/:id')
exports.getDetailUser = (req, res) => {
    const user = users.filter(item => item.id === parseInt(req.params.id))
    if (user[0]) {
        return res.json({
            success: true,
            message: 'detail user',
            result: user[0]
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
}

// PROSES DARI post
exports.createUsers = (req, res) => {
    const { name } = req.body
    countUser += 1
    const user = {
        id: countUser,
        name
    }
    users.push(user)
    return res.json({
        success: true,
        message: 'create success',
        result: user
    })
}

// PROSES DARI patch
exports.updateUsers = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const userId = users.map(user => user.id).indexOf(parseInt(id))
    if (userId !== -1) {
        users[userId].name = name
        return res.json({
            success: true,
            message: 'success',
            result: users[userId]
        })
    } else {
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
}

// PROSES DARI delete
exports.deleteUsers = (req, res)=>{
    const {id} = req.params
    const user = users.filter(user => user.id === parseInt(id))
    if(user.length){
        users = users.filter(user => user.id !== parseInt(id))
        return res.json({
            success: true,
            message: 'success',
            result: user[0]
        })
    } else{
        return res.status(404).json({
            success: false,
            message: 'user not found'
        })
    }
}


// //PROSES MENGGUNAKAN METHODE GUARDING ATAU OPERASI NEGASI ! (true menjadi false)
// // PROSES DARI get parameter('/:id')
// exports.getDetailUser = (req, res) => {
//     const user = users.filter(item => item.id === parseInt(req.params.id))
//     if(!user[0]){
//         return res.status(404).json({
//             success: false,
//             message: 'user not found'
//         })
//     }
//     return res.json({
//         success: true,
//         message: 'detail user',
//         result: user[0]
//     })
// }

// // PROSES DARI patch
// exports.updateUsers = (req, res) => {
//     const { id } = req.params
//     const { name } = req.body
//     const userId = users.map(user => user.id).indexOf(parseInt(id))
//     if(userId === -1){
//         return res.status(404).json({
//             success: false,
//             message: 'user not found'
//         })
//     }
//     users[userId].name = name
//     return res.json({
//         success: true,
//         message: 'success',
//         result: users[userId]
//     })
// }

// // PROSES DARI delete
// exports.deleteUsers = (req, res)=>{
//     const {id} = req.params
//     const user = users.filter(user => user.id === parseInt(id))
//     if(!user.length){
//         return res.status(404).json({
//             success: false,
//             message: 'user not found'
//         })
//     }
//     users = users.filter(user => user.id !== parseInt(id))
//     return res.json({
//         success: true,
//         message: 'success',
//         result: user[0]
//     })
// }