// PROSES DARI get
exports.getAllusers = (req, res)=>{
    return res.json({
        success: true,
        message: 'list all users',
        result:[
            {
                id: 1,
                name: 'wisnu'
            },
            {
                id: 2,
                name: 'dzul'
            }
        ]
    })
}
// PROSES DARI get parameter('/:id')
// YANG INI RESEARCH MANDIRI DULU

// PROSES DARI post
exports.createUsers = (req, res)=>{
    return res.json({
        success: true,
        message: 'list all users',
        result:[
            {
                id: 3,
                name: 'haidar'
            },
            {
                id: 4,
                name: 'gabriel'
            }
        ]
    })
}

// PROSES DARI patch
exports.repairUsers = (req, res)=>{
    return res.json({
        success: true,
        message: 'list all users',
        result:[
            {
                id: 1,
                name: 'ray'
            }
        ]
    })
}

// PROSES DARI delete
exports.deleteUsers = (req, res)=>{
    return res.json({
        success: true,
        message: 'list all users',
        result:[
            {
                id: 4,
                name: 'gabriel'
            }
        ]
    })
}