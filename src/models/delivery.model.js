const db = require('../lib/db.lib')

// exports.findAll = async ()=> {
//     const sql = `SELECT * FROM "categories"`
//     const values = []
//     const{rows} = await db.query(sql, values)
//     return rows
// }

// exports.findDeliveryById = async (id)=> {
//     const sql = 'SELECT * FROM "delivery" WHERE id = $1'
//     const values = [id]
//     const{rows} = await db.query(sql, values)
//     return rows
// }